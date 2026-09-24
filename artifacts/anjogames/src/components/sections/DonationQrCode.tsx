import donationQrCode from '@/assets/qr-doacao-anjogames.jpeg';

export function DonationQrCode() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary/30 p-4">
      <p className="text-center text-sm font-medium text-foreground">
        Escaneie o QR Code pelo aplicativo do seu banco para fazer uma doação.
      </p>
      <img
        src={donationQrCode}
        alt="QR Code para fazer uma doação à AnjoGames"
        className="h-48 w-48 rounded-lg border border-border bg-white p-2 object-contain"
        width={450}
        height={450}
      />
    </div>
  );
}