module.exports = {
  async afterUpdate(event) {
    const { result } = event;

    console.log("Lifecycle triggered for ID:", result.documentId);
    console.log("Status sudah_dibalas:", result.sudah_dibalas);
    console.log("Isi jawaban_admin:", result.jawaban_admin);

    // Kirim email HANYA jika jawaban ada dan status sudah_dibalas bernilai true
    if (result.jawaban_admin && result.sudah_dibalas === true) {
      try {
        console.log("Memulai proses pengiriman email ke:", result.email);
        
        await strapi.plugins['email'].services.email.send({
          to: result.email,
          from: 'rizky.perdana9e@gmail.com',
          subject: `Tanggapan Pengaduan: ${result.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>Halo ${result.nama},</h2>
              <p>Pengaduan Anda telah dibalas oleh Admin BPJPH:</p>
              <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; border-left: 4px solid #5F0968;">
                ${result.jawaban_admin}
              </div>
              <p style="margin-top: 20px;">Terima kasih.</p>
            </div>
          `,
        });

        console.log("✅ [SUCCESS] Email berhasil dikirim!");
      } catch (err) {
        console.error("❌ [ERROR] Gagal mengirim email:", err.message);
      }
    } else {
      console.log("⚠️ [SKIP] Kondisi pengiriman email tidak terpenuhi.");
    }
  },
};