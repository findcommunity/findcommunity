import { Card, CardBody } from "@heroui/card";

export default function LearningSection() {
  return (
    <section id="kelas" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Belajar bersama Find
          </h2>
          <p className="text-lg text-gray-600">
            Jelajahi kelas-kelas keuangan populer dan mulai tingkatkan literasi finansialmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1549421263-5ec394a5ad42?q=80&w=1200&auto=format&fit=crop"
              alt="Kelas Saham"
              className="h-36 w-full object-cover"
            />
            <CardBody>
              <h3 className="text-lg font-semibold">Kelas Saham</h3>
              <p className="text-sm text-gray-600 mt-1">
                Pahami fundamental dan teknikal, pilih saham unggulan, dan kelola risiko.
              </p>
            </CardBody>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop"
              alt="Kelas Obligasi"
              className="h-36 w-full object-cover"
            />
            <CardBody>
              <h3 className="text-lg font-semibold">Kelas Obligasi</h3>
              <p className="text-sm text-gray-600 mt-1">
                Pelajari kupon, yield, durasi, dan strategi membangun pendapatan pasif stabil.
              </p>
            </CardBody>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              alt="Kelas Reksadana"
              className="h-36 w-full object-cover"
            />
            <CardBody>
              <h3 className="text-lg font-semibold">Kelas Reksadana</h3>
              <p className="text-sm text-gray-600 mt-1">
                Kenali jenis reksadana, biaya, dan cara memilih manajer investasi terbaik.
              </p>
            </CardBody>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1610375229632-cfafb7a62cb6?q=80&w=1200&auto=format&fit=crop"
              alt="Kelas Emas"
              className="h-36 w-full object-cover"
            />
            <CardBody>
              <h3 className="text-lg font-semibold">Kelas Emas</h3>
              <p className="text-sm text-gray-600 mt-1">
                Strategi nabung emas, lindung nilai inflasi, dan perencanaan jangka panjang.
              </p>
            </CardBody>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop"
              alt="Kelas Crypto"
              className="h-36 w-full object-cover"
            />
            <CardBody>
              <h3 className="text-lg font-semibold">Kelas Crypto</h3>
              <p className="text-sm text-gray-600 mt-1">
                Pahami blockchain, aset kripto, keamanan wallet, dan strategi investasi kripto.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}




