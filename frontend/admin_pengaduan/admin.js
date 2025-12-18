const ADMIN_TOKEN = CONFIG.STRAPI_TOKEN;
const API_BASE = "http://localhost:1337/api/complaints";
let allData = [];
let filteredData = [];
let selectedComplaintId = null;

// State Pagination & Filter
let currentStatusFilter = false; 
let currentPage = 1;
let rowsPerPage = 10;

document.addEventListener('DOMContentLoaded', fetchData);

// 1. Fetch Master Data
async function fetchData() {
    try {
        const response = await fetch(API_BASE, {
            headers: { 'Authorization': `Bearer ${ADMIN_TOKEN}` }
        });
        const { data } = await response.json();
        allData = data;
        
        updateStats();
        applyFilterAndRender();
    } catch (error) {
        console.error("Gagal sinkronisasi data:", error);
    }
}

// 2. Navigation Logic
function switchSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');

    // UI Updates
    const titles = { dashboard: 'Dashboard Analitik', complaints: 'Manajemen Pengaduan', reports: 'Laporan & Export' };
    document.getElementById('sectionTitle').innerText = titles[sectionId];
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active-tab', 'text-white'));
    document.getElementById(`btn-${sectionId}`).classList.add('active-tab');
}

// 3. Status Filter (Sub-Tab Manajemen)
function setStatusFilter(status) {
    currentStatusFilter = status;
    currentPage = 1;
    
    // UI Tab Active
    const tPerlu = document.getElementById('tabPerlu');
    const tSudah = document.getElementById('tabSudah');
    
    if(status) {
        tSudah.className = "pb-4 border-b-4 border-[#5F0968] font-bold text-[#5F0968] text-lg";
        tPerlu.className = "pb-4 border-b-4 border-transparent text-slate-400 font-semibold text-lg";
    } else {
        tPerlu.className = "pb-4 border-b-4 border-[#5F0968] font-bold text-[#5F0968] text-lg";
        tSudah.className = "pb-4 border-b-4 border-transparent text-slate-400 font-semibold text-lg";
    }
    
    applyFilterAndRender();
}

// 4. Logic Core: Filter, Paginate, Render
function handlePageSizeChange() {
    rowsPerPage = parseInt(document.getElementById('pageSize').value);
    currentPage = 1;
    applyFilterAndRender();
}

function applyFilterAndRender() {
    // Filter by status
    filteredData = allData.filter(item => item.sudah_dibalas === currentStatusFilter);
    
    // Slice data for pagination
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = filteredData.slice(start, end);
    
    renderTable(paginatedData);
    renderPagination(filteredData.length);
}

function renderTable(data) {
    const tableBody = document.getElementById('complaintTableBody');
    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" class="p-20 text-center text-slate-400 font-medium">Tidak ada data ditemukan.</td></tr>`;
        return;
    }

    tableBody.innerHTML = data.map(c => `
        <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition-all">
            <td class="p-6">
                <div class="font-bold text-slate-800 text-base">${c.nama}</div>
                <div class="text-sm text-slate-400 flex items-center gap-1"><i class="ri-mail-line"></i> ${c.email}</div>
            </td>
            <td class="p-6">
                <div class="text-slate-700 font-semibold">${c.subject}</div>
                <div class="text-xs text-slate-400 truncate max-w-[200px]">${c.pesan}</div>
            </td>
            <td class="p-6"><span class="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600">${c.kategori}</span></td>
            <td class="p-6 text-right">
                ${!c.sudah_dibalas ? 
                    `<button onclick="openModal('${c.documentId}', '${c.email}')" class="px-6 py-2 rounded-xl bg-[#5F0968] text-white text-xs font-bold shadow-md hover:shadow-purple-200 transition-all">Balas Sekarang</button>` 
                    : `<span class="text-green-500 font-bold text-xs flex items-center justify-end gap-1"><i class="ri-checkbox-circle-fill"></i> Dibalas</span>`
                }
            </td>
        </tr>
    `).join('');
}

function renderPagination(totalItems) {
    const container = document.getElementById('paginationContainer');
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    container.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `w-10 h-10 rounded-xl font-bold transition-all ${currentPage === i ? 'bg-[#5F0968] text-white shadow-lg' : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100'}`;
        btn.onclick = () => { currentPage = i; applyFilterAndRender(); };
        container.appendChild(btn);
    }
}

function updateStats() {
    document.getElementById('totalCount').innerText = allData.length;
    document.getElementById('pendingCount').innerText = allData.filter(i => !i.sudah_dibalas).length;
    document.getElementById('solvedCount').innerText = allData.filter(i => i.sudah_dibalas).length;
}

// 5. Action Logic
function openModal(id, email) {
    selectedComplaintId = id;
    document.getElementById('modalUserEmail').innerText = `Email: ${email}`;
    document.getElementById('replyModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('replyModal').classList.add('hidden');
    document.getElementById('replyTextarea').value = "";
}

document.getElementById('confirmReplyBtn').addEventListener('click', async () => {
    const jawaban = document.getElementById('replyTextarea').value;
    if (!jawaban) return alert("Silakan isi jawaban terlebih dahulu.");

    try {
        const response = await fetch(`${API_BASE}/${selectedComplaintId}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ADMIN_TOKEN}`
            },
            body: JSON.stringify({ data: { jawaban_admin: jawaban, sudah_dibalas: true } })
        });

        if (response.ok) {
            alert("Email balasan berhasil terkirim!");
            closeModal();
            fetchData();
        }
    } catch (error) {
        alert("Terjadi kesalahan sistem.");
    }
});

// 6. Export Excel (Professional Style)
function exportToExcel() {
    const reportData = allData.map(c => ({
        "ID Dokumen": c.documentId,
        "Nama Pengadu": c.nama,
        "Email": c.email,
        "Kategori": c.kategori,
        "Subjek": c.subject,
        "Pesan": c.pesan,
        "Jawaban Admin": c.jawaban_admin || "-",
        "Status": c.sudah_dibalas ? "Selesai" : "Pending",
        "Tanggal": new Date().toLocaleDateString('id-ID')
    }));

    const ws = XLSX.utils.json_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Master Pengaduan");
    XLSX.writeFile(wb, `BPJPH_Master_Report_${new Date().getTime()}.xlsx`);
}