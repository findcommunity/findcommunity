import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function CTASection() {
  return (
    <section id="daftar" className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="rounded-2xl border border-gray-200 p-10 bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-sm">
          <h3 className="text-3xl font-bold">Siap Memulai Perjalanan Finansial Anda?</h3>
          <p className="text-gray-700 mt-2">
            Konsultasi gratis dengan expert kami untuk menemukan kelas yang tepat
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="https://wa.me/6281234567890" isExternal>
              <Button
                variant="solid"
                radius="full"
                size="lg"
                className="shadow-lg hover:shadow-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
              >
                Konsultasi WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
