 <div>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
        <div className="w-52 absolute sm:relative bg-green-500 shadow md:h-full flex-col justify-between flex">
          <div>
            <div className="flex items-center mt-10 mb-0 px-8">
              <div className="w-10 h-10 bg-cover rounded-md mr-3">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png"
                  alt
                  className="rounded-full h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">{userName}</p>
                <p className="text-gray-600 text-xs">DA / ADMIN</p>
              </div>
            </div>
            <ul className="mt-6">
              <a href="/admin/dashboard">
                <li className="flex w-full justify-between text-white hover:text-gray-300 hover:bg-green-600 cursor-pointer items-center py-3 px-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                    <span className="text-sm  ml-2">Dashboard</span>
                  </div>
                </li>
              </a>
              <a href="/admin/products/srp">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="text-sm  ml-2">Price Control</span>
                  </div>
                </li>
              </a>
              <a href="/admin/products/approved">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="text-sm  ml-2">Products</span>
                  </div>
                </li>
              </a>

              {/* <a href="/admin/farms/approved">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                    <span className="text-sm  ml-2">Farm Lists</span>
                  </div>
                </li>
              </a> */}
              <a href="/admin/farmers/profile/">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600 cursor-pointer items-center  px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 11a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M11 14a1 1 0 011 1v6h2v-6a3 3 0 00-3-3H5a3 3 0 00-3 3v6h2v-6a1 1 0 011-1h6zM22 11h-6v2h6v-2zM16 15h6v2h-6v-2zM22 7h-6v2h6V7z"
                      />
                    </svg>
                    <span className="text-sm  ml-2">&nbsp;Farmers Profile</span>
                  </div>
                </li>
              </a>
              <a href="/admin/croprecords">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-stack"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 4 4 8 12 12 20 8 12 4" />
                      <polyline points="4 12 12 16 20 12" />
                      <polyline points="4 16 12 20 20 16" />
                    </svg>
                    <span className="text-sm  ml-2">Crop Record</span>
                  </div>
                </li>
              </a>
              <a href="/admin/supported/barangay">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    <span className="text-sm  ml-2">Barangays</span>
                  </div>
                </li>
              </a>
              <a href="/admin/users/pending">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M888 784H664c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7zM824 484c0-109.4-87.9-198.3-196.9-200C516.3 282.3 424 373.2 424 484c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 754.6 326 826.8 324 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 707.7 563 684 624 684c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 598.7 658.2 612 624 612s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z" />
                    </svg>
                    <span className="text-sm  ml-2"> &nbsp;Pending Users</span>
                  </div>
                </li>
              </a>
              <a href="/admin/users/verified">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z" />
                    </svg>
                    <span className="text-sm  ml-2"> &nbsp;Verified Users</span>
                  </div>
                </li>
              </a>
              <a href="/admin/users/all">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M1000 940H776V790c0-36-10-63-30-81s-71.333-47.667-154-89c26.667-20 40-48 40-84 0-10.667-4.333-21.667-13-33-8.667-11.333-15-28.333-19-51-1.333-5.333-6-10.667-14-16s-12.667-19.333-14-42c0-16 4-26 12-30-4-22.667-6.667-42.667-8-60-2.667-25.333 5-51.333 23-78s49.667-40 95-40 77.333 13.333 96 40 26.667 52.667 24 78l-8 60c8 4 12 14 12 30-1.333 22.667-6 36.667-14 42-8 5.333-12.667 10.667-14 16-4 22.667-10.333 39.667-19 51-8.667 11.333-13 22.333-13 33 0 28 7 50 21 66s39.667 32 77 48c74.667 30.667 118 57.333 130 80 4 5.333 7 25.667 9 61s3.667 69 5 101v48M512 678c121.333 52 182 93.333 182 124v138H0V756c0-29.333 28-55.333 84-78 50.667-21.333 85.333-42.667 104-64s28-50.667 28-88c0-13.333-6.333-28-19-44s-21-38.667-25-68c-1.333-6.667-7.333-14-18-22s-17.333-26.667-20-56c0-9.333 1-17 3-23s4.333-10.333 7-13l4-2c-4-30.667-7.333-58-10-82-2.667-33.333 8.333-67.667 33-103s67-53 127-53 102.333 17.667 127 53 35.667 69.667 33 103l-10 82c9.333 5.333 14 18 14 38-2.667 29.333-9.333 48-20 56s-16.667 15.333-18 22c-4 29.333-12.333 52-25 68s-19 30.667-19 44c0 37.333 9.333 66.667 28 88s53.333 42.667 104 64" />
                    </svg>
                    <span className="text-sm  ml-2"> &nbsp;All Users</span>
                  </div>
                </li>
              </a>
              <a href="/admin/report/generate">
                <li className="flex w-full justify-between  text-white hover:text-gray-300 hover:bg-green-600  cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                    <span className="text-sm  ml-2">Generate Reports</span>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="px-8 bg-green-600">
            <ul className="w-full flex items-center justify-between ">



              <li className="cursor-pointer text-white pt-5 pb-3">
                <a onClick={onLogoutConfirm}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar ends */}
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Place your content here */}
          </div>
        </div>
        {/* </div> */}
        {/* </div>
          </div> */}

        {/* </div> */}
      </aside>

      <div className="p-0 sm:ml-64">
        <div className="p-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </div>
