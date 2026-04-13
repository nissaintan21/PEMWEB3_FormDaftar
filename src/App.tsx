import './App.css'
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Collapse } from './components/Collapse';
import { Header } from './components/Header';
import { UserCard } from './components/UserCard';

function App() {
  const users = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description: "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description: "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”.",
    },
    {
      title: "IT Talkshow",
      description: "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”.",
    },
    {
      title: "IT Competition",
      description: "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi.",
    },
    {
      title: "IT Workshop",
      description: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era'.",
    },
  ];

  return (
  
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <section id="hero" className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest Text"
              className="w-full max-w-sm"
            />
            <p className="text-gray-600 leading-relaxed text-lg">
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.
            </p>

            <div className="flex gap-3">
              <Button title="Daftar Sekarang" variant="primary" />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Mascot"
              className="w-full max-w-[300px] md:max-w-full h-auto"
            />
          </div>
        </section>

        <section id="speaker" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-900">Our Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {users.map((item, index) => (
              <UserCard
                key={index}
                name={item.name}
                role={item.role}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </section>

        <section id="cards" className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full flex flex-col justify-between p-6">
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <Button
                title="Daftar Sekarang"
                variant="primary"
                className="mt-6 w-fit"
              />
            </Card>
          ))}
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Frequently Asked Questions</h2>
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;