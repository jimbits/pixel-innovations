function CarrerSection(props) {
  return (
    <div className="mb-28 bg-slate-50">
      <section className="max-w-7xl mx-auto px-20 py-28 ">
        <header className=" text-center mb-14 ">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Get a jump on your carrer.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </header>
        <ul
          className="grid grid-cols-3 gap-x-8  "
          role="tablist"
          aria-orientation="horizontal"
        >
          <li className="relative opacity-75 hover:opacity-100">
            {/* Progress */}
            <div className="w-9 rounded-lg bg-slate-500">
              <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id=":R1bdqmkq:"
                    x1="11.5"
                    y1="18"
                    x2="36"
                    y2="15.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".194"
                      stopColor="#fff"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#6692F1"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                  stroke="url(#:R1bdqmkq:)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600">
              <button
                className="ui-not-focus-visible:outline-none"
                id="headlessui-tabs-tab-:R2bdqmkq:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex="-1"
                data-headlessui-state=""
                aria-controls="headlessui-tabs-panel-:R1ddqmkq:"
              >
                <span className="absolute inset-0"></span>Weekly Check-in
              </button>
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur reiciendis rerum distinctio.
            </p>
          </li>
          <li className="relative opacity-75 hover:opacity-100">
            <div className="w-9 rounded-lg bg-slate-500">
              <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
              >
                <path
                  opacity=".5"
                  d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                  fill="#fff"
                ></path>
                <path
                  opacity=".3"
                  d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                  fill="#fff"
                ></path>
                <path
                  d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600">
              <button
                className="ui-not-focus-visible:outline-none"
                id="headlessui-tabs-tab-:R2jdqmkq:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex="-1"
                data-headlessui-state=""
                aria-controls="headlessui-tabs-panel-:R2ddqmkq:"
              >
                <span className="absolute inset-0"></span>Tasks
              </button>
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Enim archi tecto id nulla comm oditio
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              libero ducimus possimus nulla tempore velit non soluta, magnam
              exercitationem et!
            </p>
          </li>
          <li className="relative">
            <div className="w-9 rounded-lg bg-blue-600">
              <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
              >
                <path
                  opacity=".5"
                  d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                  fill="#fff"
                ></path>
                <path
                  d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-blue-600">
              <button
                className="ui-not-focus-visible:outline-none"
                id="headlessui-tabs-tab-:R2rdqmkq:"
                role="tab"
                type="button"
                aria-selected="true"
                tabIndex="0"
                data-headlessui-state="selected"
                aria-controls="headlessui-tabs-panel-:R3ddqmkq:"
              >
                <span className="absolute inset-0"></span>Mentors
              </button>
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Sempore eaque sint odit, doloribus quam quia voluptatem.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Fing elit. Quos quae ab consequuntur rerum tempora. Consequuntur
              iste, quam pariatur aspernatur modi harum debitis eius libero
              illum officiis.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { CarrerSection };
