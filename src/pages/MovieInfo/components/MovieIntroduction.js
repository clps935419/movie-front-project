import { Badge, Col, Container, Row } from 'react-bootstrap';


export default function MovieIntroduction(params) {
  return (<>
    <Container className='my-5'>
      <Row>
        <Col xs={12} md={4}><img className="img-fluid" src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20230218037.jpg" alt="" /></Col>
        <Col xs={12} md={8} className='fs-6'>
          <h1 class="card-title">超級瑪利歐兄弟電影版</h1>
          <p class="fs-3 card-subtitle mb-2 text-muted">THE SUPER MARIO BROS MOVIE</p>
          <Badge bg="customBadgeYellow" text="dark" pill className='mb-3 caption1'>普通級</Badge>
          <p>片長：93分</p>
          <p>上映日期：2023/04/05</p>
          <p>導演：亞倫霍瓦斯(Aaron Horvath)，麥可傑勒尼克(Michael Jelenic)</p>
          <p>演員：克里斯普瑞特(Chris Pratt)，安雅泰勒喬伊(Anya Taylor-Joy)，查理戴(Charlie Day)，傑克布萊克(Jack Black)，基根麥可基(Keegan-Michael Key)，塞斯羅根(Seth Rogen)，弗萊德阿米森(Fred Armisen)，凱里佩頓(Khary Payton)</p>
          <p>類型：動畫，冒險，喜劇</p>
          <h4 className='my-3'>劇情簡介</h4>
          <p>任天堂暨照明娛樂共同出品一部改編自最受歡迎電玩遊戲《超級瑪利歐兄弟》的全新動畫片《超級瑪利歐兄弟電影版》。 《超級瑪利歐兄弟電影版》一片的導演是亞倫霍瓦斯和麥可傑勒尼克（卡通影集《少年悍將GO！》、《電影少年悍將GO！》），編劇是馬修福格（《樂高玩電影2》、《小小兵2：格魯的崛起》），配音演員包括克里斯普瑞特（瑪利歐）、安雅泰勒喬伊（碧姬）、查理戴（路易吉）、傑克布萊克（庫巴）、基根麥可奇（奇諾比奧）、塞斯羅根（咚奇剛）、佛萊德阿米森（庫朗奇剛）、凱文麥可理查森（卡美克）以及賽巴斯汀曼尼斯葛爾柯（布拉奇）。 這部動畫片的製片是照明娛樂創辦人和執行長克里斯梅勒丹德利以及任天堂的「瑪利歐之父」宮本茂。這部動畫片將由環球影業與任天堂共同出資製作，並由環球影業全球發行。</p>
        </Col>
      </Row>
    </Container>
  </>)
};
