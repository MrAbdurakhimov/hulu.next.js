import Image from 'next/image';

const Header = () => {
  return (
    <header className="">
      <h2>App</h2>
      <Image
        src="https://links.papareact.com/ua6"
        height={100}
        width={200}
        alt={'Hulu logo'}
        className="object-contain"
      ></Image>
    </header>
  );
};

export default Header;
