import ProfileCard from './component/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'สมชาย ใจร้าย', nickname: 'ฟ้า',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาแดง', 'สุนัข'] },
  { id: 3, name: 'สมศักธิ์ ใจกว้าง', nickname: 'อากาศ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาน้ำเงิน', 'ปลา'] },
    
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

