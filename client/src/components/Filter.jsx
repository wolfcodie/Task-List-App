import home from "../assets/home.png";
import arrow from "../assets/arrow.png";

function Filter({ setFilter, filter }) {
  return (
    <section className="flex max-md:flex-col max-md:gap-10 gap-3 bg-blue my-10 p-4 px-14 rounded-lg justify-between items-center  w-[90%] m-auto ">
      <article className="flex justify-between items-center text-white gap-6">
        <img src={home} alt="home icon" />
        <img src={arrow} alt="home icon" className="h-[20%] w-[20%]" />
        <p>Tasks</p>
        <img src={arrow} alt="home icon" />
        <p>{filter == "true" ? "Complete" : "Incomplete"}</p>
      </article>
      <article className="flex gap-3">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="px-6 py-3 border rounded-lg bg-[transparent] border border-lightGreen p-4 border-2 border-blue rounded-md text-lightGreen "
        >
          <option value="all">All</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
      </article>
    </section>
  );
}

export default Filter;
