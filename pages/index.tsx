import Layout from "../layouts/DefaultLayout";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import {
  CalendarIcon,
  DownIcon,
  HumanIcon,
  Logo,
  PointsIcon,
} from "../components/icons";
import Banner from "../public/image1.webp";
import Carousel from "../components/carousel";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import MapList from "../public/mapList.png";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <LatestBlogs />
      <ImageList />
      <ActiveServers />
      <Footer />
    </Layout>
  );
}

function HomeHero() {
  return (
    <div className="md:h-[93.999vh] w-full px-28 flex flex-col justify-center">
      <div className="xl:grid grid-cols-2 items-center h-full">
        <HomeHeroLeft />
        <HomeHeroRight />
      </div>
      <HomeHeroScrollDown />
    </div>
  );
}

function HomeHeroLeft() {
  return (
    <div className="gap-y-3  w-[652px]">
      <h1>Dragon Games</h1>
      <h3>Открой для себя новый опыт игровых серверов!</h3>
      <div className="flex gap-x-5">
        <PlayerCount />
        <PlayerCount />
      </div>
      <JoinUsButton />
    </div>
  );
}

function HomeHeroRight() {
  return <Logo />;
}

function HomeHeroScrollDown() {
  return (
    <div className="relative bottom-0 right-0 left-0">
      <ScrollDownLink />
    </div>
  );
}

function LatestBlogs() {
  return (
    <div className="shadow shadow-blue-500/40 md:shadow-indigo-500/40 py-10 w-full bg-[#1C1F30]">
      <h2 className="px-20" id="page2">
        Последние блоги
      </h2>
      <Carousel>
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </Carousel>
    </div>
  );
}

function ImageList() {
  return (
    <div className="w-full flex justify-center">
      <Image src={MapList} alt="Map List" />
    </div>
  );
}

function ActiveServers() {
  return (
    <div className="shadow shadow-blue-500/40 md:shadow-indigo-500/40 py-10">
      <h2 className="px-20">Активные сервера</h2>
      <Carousel>
        {Array.from({ length: 3 }).map((_, index) => (
          <ServerCard key={index} />
        ))}
      </Carousel>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-center items-center h-80 bg-[#171926] shadow shadow-blue-500/40 md:shadow-indigo-500/40">
      <h2 className="text-[#ff4a57]">dragon games</h2>
    </div>
  );
}

function PlayerCount() {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <HumanIcon />
        <h4>70</h4>
      </div>
      <span>игроков онлайн</span>
    </div>
  );
}

function JoinUsButton() {
  return (
    <Button radius="none" className="bg-[#C04B53]">
      Давай играть с нами
    </Button>
  );
}

function ScrollDownLink() {
  return (
    <div className="w-full flex items-center justify-center py-3">
      <a href="#page2">
        <DownIcon className="animate-bounce" />
      </a>
    </div>
  );
}

function BlogCard() {
  return (
    <Card className="bg-transparent max-w-[477px] drop-shadow-none shadow-none">
      <CardHeader>
        <Image src={Banner} alt={"asd"} />
      </CardHeader>
      <CardBody>
        <h3 className="text-[#C04B53]">Декабрьское Обновление</h3>
        <div className="flex items-center gap-8">
          <div className="bg-[#2E324F] text-white text-xs uppercase px-5 py-2">
            Обновление
          </div>
          <div className="flex gap-x-3 items-center">
            <CalendarIcon />
            <p className="text-xs uppercase text-white">
              среда, 15 декабря 2021 г.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function ServerCard() {
  return (
    <Card className="bg-transparent max-w-[477px] drop-shadow-none shadow-none">
      <CardHeader>
        <div>
          <h3 className="text-[#ff4a57]">[RP] Школа 666</h3>
          <div>
            <div className="flex items-center gap-4">
              <PointsIcon />
              <h5>127.256.324.23</h5>
            </div>
            <div className="flex items-center gap-4">
              <HumanIcon />
              <h5>127.256.324.23</h5>
            </div>
            <div className="flex items-center gap-4">
              <HumanIcon />
              <h5>127.256.324.23</h5>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}
