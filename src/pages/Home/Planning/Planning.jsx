import { BsStopwatch } from "react-icons/bs";

const Planning = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold font-serif text-center">
        Plans <span className="text-[#F21855]">&</span> Pricing
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 ml-5">
        <div className="card w-96 bg-[#1EAACE] shadow-xl">
          <div className="card-body flex flex-col items-center">
            <div className="bg-[#202C45] bg-opacity-30 w-96 py-5 ">
              <h2 className="card-title text-white justify-center items-center text-3xl font-bold font-serif">
                Trial
              </h2>
            </div>
            <p className="my-3">
              <BsStopwatch size={44} />
            </p>
            <h2 className="text-white text-2xl font-serif font-semibold">
              Free! 30Days
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4">
                Purchase Plan
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#1DBB90] shadow-xl">
          <div className="card-body flex flex-col items-center">
            <div className="bg-[#202C45] bg-opacity-30 w-96 py-5 ">
              <h2 className="card-title text-white justify-center items-center text-3xl font-bold font-serif">
                Monthly
              </h2>
            </div>
            <h2 className="text-white text-2xl font-serif font-bold">$89</h2>
            <h2 className="text-white text-lg font-serif font-semibold">
              Save $98 every year compared to the monthly plan by paying yearly basis.
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4">
                Purchase Plan
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#FFB20E] shadow-xl">
          <div className="card-body flex flex-col items-center">
            <div className="bg-[#202C45] bg-opacity-30 w-96 py-5 ">
              <h2 className="card-title text-white justify-center items-center text-3xl font-bold font-serif">
                Yearly
              </h2>
            </div>
            <h2 className="text-white text-2xl font-serif font-bold">$129</h2>
            <h2 className="text-white text-lg font-serif font-semibold">
              Save $120 every year compared to the monthly plan by paying
              biannually.
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#dae1f1] text-[#F21855] border-[#202C45] border-0 border-b-4 mt-4">
                Purchase Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
