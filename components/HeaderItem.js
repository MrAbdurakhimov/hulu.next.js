const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <a
        className="tracking-widest opacity-0 group-hover:opacity-100"
        href={`/${title}`}
      >
        {title}
      </a>
    </div>
  );
};

export default HeaderItem;
