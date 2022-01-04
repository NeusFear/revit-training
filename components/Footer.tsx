
const Footer = () => {
  return (
    <footer className="footer bg-neutral-900 xl:px-60 lg:px-20 px-0 py-20">
      <div className="grid grid-flow-col md:grid-cols-2 px-4 md:px-20 gap-y-10 gap-x-10">
        <div className="text-neutral-700 text-xs mx-4 w-full col-span-1">
          <h1 className="text-3xl">Our Mission</h1>
          <div>Professor Awilda Rodriguez and one of her Students Brandon Davis agreed that the future of curriculum is on the web. To make viewing some of the Revit lessons simpler we decided to create a website so that the students can access it anywhere and whenever they need it.</div>
        </div>
        <div className="mx-4 w-full col-span-1">
          <div className="text-neutral-700 text-xs">
            <h1 className="text-3xl">Other Stuff</h1>
            <p>This project was created auxiliary to the curriculum provided by Professor Rodriguez at Oklahoma State University, but is not a product of the University; rather it is a Student made project.</p>
            <div className="text-neutral-700 text-xs mt-2 mb-10">Learn Revit Online updated 2022.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;