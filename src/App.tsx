import { BoxIcon } from "lucide-react";
import { Step } from "./components/Steps";
import { CompanyForm } from "./components/CompanyForm";

function App() {
  return (
    <div className="h-screen  bg-[#4747F3] p-4 md:p-6 flex md:items-center justify-center overflow-auto">
      <div className=" size-[36rem] bg-[#fe6675] absolute bottom-0 left-0 rounded-full translate-x-[-40%] translate-y-[40%]"></div>
      <div className="max-w-7xl w-full z-20 relative">
        <div className="rounded-3xl bg-white shadow-lg overflow-hidden border-2 border-black">
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-1/4 mb-8 md:mb-0 bg-[#fbfbfb] p-10">
              <div className="mb-16 flex items-center space-x-3">
                <BoxIcon className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">InsideBox</span>
              </div>

              {/* Progress Steps */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 flex-wrap md:flex-nowrap">
                <Step completed label="Company type" number={1} />
                <Step completed label="State" number={2} />
                <Step active label="Business details" number={3} />
                <Step label="Team" number={4} />
                <Step label="Personal details" number={5} />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Help Link */}
              <div className="text-right text-gray-500 p-8 pb-0">
                Having trouble?
                <a
                  href="#"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {" "}
                  Get Help
                </a>
              </div>

              <div className="p-8 md:p-16">
                <div className="mb-8">
                  <h1 className="mb-1 text-2xl font-bold">
                    About your company
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Enter detailed information about your company.
                  </p>
                </div>

                <CompanyForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
