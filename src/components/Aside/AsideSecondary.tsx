import React from 'react';

function AsideSecondary() {
  return (
    <div className="aside-secondary d-flex flex-row-fluid">
      {/*--begin::Workspace--*/}
      <div className="aside-workspace my-5 p-5" id="kt_aside_wordspace">
        <div className="d-flex h-100 flex-column">
          {/*--begin::Wrapper--*/}
          <div
            className="flex-column-fluid hover-scroll-y"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-wrappers="#kt_aside_wordspace"
            data-kt-scroll-dependencies="#kt_aside_secondary_footer"
            data-kt-scroll-offset="0px"
          >
            {/*--begin::Tab content--*/}
            <div className="tab-content">
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade active show" id="kt_aside_nav_tab_projects" role="tabpanel">
                {/*--begin::Wrapper--*/}
                <div className="m-0">
                  {/*--begin::Toolbar--*/}
                  <div className="d-flex mb-10">
                    {/*--begin::Search--*/}
                    <div
                      id="kt_header_search"
                      className="d-flex align-items-center w-lg-400px"
                      data-kt-search-keypress="true"
                      data-kt-search-min-length="2"
                      data-kt-search-enter="enter"
                      data-kt-search-layout="menu"
                      data-kt-menu-trigger="auto"
                      data-kt-menu-permanent="true"
                      data-kt-menu-placement="bottom-start"
                    >
                      {/*--begin::Form--*/}
                      <form
                        data-kt-search-element="form"
                        className="w-100 position-relative mb-5 mb-lg-0"
                        autocomplete={false}
                      >
                        {/*--begin::Hidden input(Added to disable form autocomplete)--*/}
                        <input type="hidden" />
                        {/*--end::Hidden input--*/}
                        {/*--begin::Icon--*/}
                        {/*--begin::Svg Icon | path: icons/duotune/general/gen021.svg--*/}
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x="17.0365"
                              y="15.1223"
                              width="8.15546"
                              height="2"
                              rx="1"
                              transform="rotate(45 17.0365 15.1223)"
                              fill="black"
                            />
                            <path
                              d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                        {/*--end::Icon--*/}
                        {/*--begin::Input--*/}
                        <input
                          type="text"
                          className="form-control form-control-solid ps-15"
                          name="search"
                          value=""
                          placeholder="Search..."
                          data-kt-search-element="input"
                        />
                        {/*--end::Input--*/}
                        {/*--begin::Spinner--*/}
                        <span
                          className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                          data-kt-search-element="spinner"
                        >
                          <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                        </span>
                        {/*--end::Spinner--*/}
                        {/*--begin::Reset--*/}
                        <span
                          className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                          data-kt-search-element="clear"
                        >
                          {/*--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg--*/}
                          <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="6"
                                y="17.3137"
                                width="16"
                                height="2"
                                rx="1"
                                transform="rotate(-45 6 17.3137)"
                                fill="black"
                              />
                              <rect
                                x="7.41422"
                                y="6"
                                width="16"
                                height="2"
                                rx="1"
                                transform="rotate(45 7.41422 6)"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        {/*--end::Reset--*/}
                      </form>
                      {/*--end::Form--*/}
                      {/*--begin::Menu--*/}
                      <div
                        data-kt-search-element="content"
                        className="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
                      >
                        {/*--begin::Wrapper--*/}
                        <div data-kt-search-element="wrapper">
                          {/*--begin::Recently viewed--*/}
                          <div data-kt-search-element="results" className="d-none">
                            {/*--begin::Items--*/}
                            <div className="scroll-y mh-200px mh-lg-350px">
                              {/*--begin::Category title--*/}
                              <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">
                                Users
                              </h3>
                              {/*--end::Category title--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <img src="assets/media/avatars/150-1.jpg" alt="" />
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Karina Clark</span>
                                  <span className="fs-7 fw-bold text-muted">Marketing Manager</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <img src="assets/media/avatars/150-3.jpg" alt="" />
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Olivia Bold</span>
                                  <span className="fs-7 fw-bold text-muted">Software Engineer</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <img src="assets/media/avatars/150-8.jpg" alt="" />
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Ana Clark</span>
                                  <span className="fs-7 fw-bold text-muted">UI/UX Designer</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <img src="assets/media/avatars/150-11.jpg" alt="" />
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Nick Pitola</span>
                                  <span className="fs-7 fw-bold text-muted">Art Director</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <img src="assets/media/avatars/150-12.jpg" alt="" />
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Edward Kulnic</span>
                                  <span className="fs-7 fw-bold text-muted">System Administrator</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Category title--*/}
                              <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                Customers
                              </h3>
                              {/*--end::Category title--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/volicity-9.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Company Rbranding</span>
                                  <span className="fs-7 fw-bold text-muted">UI Design</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Company Re-branding</span>
                                  <span className="fs-7 fw-bold text-muted">Web Development</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Business Analytics App</span>
                                  <span className="fs-7 fw-bold text-muted">Administration</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">EcoLeaf App Launch</span>
                                  <span className="fs-7 fw-bold text-muted">Marketing</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/tower.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">Tower Group Website</span>
                                  <span className="fs-7 fw-bold text-muted">Google Adwords</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Category title--*/}
                              <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                Projects
                              </h3>
                              {/*--end::Category title--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/general/gen005.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z"
                                          fill="black"
                                        />
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">Si-Fi Project by AU Themes</span>
                                  <span className="fs-7 fw-bold text-muted">#45670</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/general/gen032.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">Shopix Mobile App Planning</span>
                                  <span className="fs-7 fw-bold text-muted">#45690</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                          fill="black"
                                        />
                                        <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                                        <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">Finance Monitoring SAAS Discussion</span>
                                  <span className="fs-7 fw-bold text-muted">#21090</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/communication/com006.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">Dashboard Analitics Launch</span>
                                  <span className="fs-7 fw-bold text-muted">#34560</span>
                                </div>
                                {/*--end::Title--*/}
                              </a>
                              {/*--end::Item--*/}
                            </div>
                            {/*--end::Items--*/}
                          </div>
                          {/*--end::Recently viewed--*/}
                          {/*--begin::Recently viewed--*/}
                          <div className="mb-4" data-kt-search-element="main">
                            {/*--begin::Heading--*/}
                            <div className="d-flex flex-stack fw-bold mb-5">
                              {/*--begin::Label--*/}
                              <span className="text-muted fs-6 me-2">Recently Searched</span>
                              {/*--end::Label--*/}
                              {/*--begin::Toolbar--*/}
                              <div className="d-flex" data-kt-search-element="toolbar">
                                {/*--begin::Preferences toggle--*/}
                                <div
                                  data-kt-search-element="preferences-show"
                                  className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle="
                                  title="Show search preferences"
                                >
                                  {/*--begin::Svg Icon | path: icons/duotune/coding/cod001.svg--*/}
                                  <span className="svg-icon svg-icon-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        opacity="0.3"
                                        d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  {/*--end::Svg Icon--*/}
                                </div>
                                {/*--end::Preferences toggle--*/}
                                {/*--begin::Advanced search toggle--*/}
                                <div
                                  data-kt-search-element="advanced-options-form-show"
                                  className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                  data-bs-toggle="tooltip"
                                  title="Show more search options"
                                >
                                  {/*--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg--*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  {/*--end::Svg Icon--*/}
                                </div>
                                {/*--end::Advanced search toggle--*/}
                              </div>
                              {/*--end::Toolbar--*/}
                            </div>
                            {/*--end::Heading--*/}
                            {/*--begin::Items--*/}
                            <div className="scroll-y mh-200px mh-lg-325px">
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/electronics/elc004.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                                          fill="black"
                                        />
                                        <path opacity="0.3" d="M15 17H9V20H15V17Z" fill="black" />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    BoomApp by Keenthemes
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#45789</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/graphs/gra001.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    "Kept API Project Meeting
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#84050</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/graphs/gra006.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    "KPI Monitoring App Launch
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#84250</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/graphs/gra002.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="black" />
                                        <path
                                          d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    Project Reference FAQ
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#67945</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/communication/com010.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    "FitPro App Development
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#84250</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--begin::Svg Icon | path: icons/duotune/finance/fin001.svg--*/}
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                    {/*--end::Svg Icon--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    Shopix Mobile App
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#45690</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                              {/*--begin::Item--*/}
                              <div className="d-flex align-items-center mb-5">
                                {/*--begin::Symbol--*/}
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    {/*--SVG file not found: icons/duotune/graphs/gra002.svg
--*/}
                                  </span>
                                </div>
                                {/*--end::Symbol--*/}
                                {/*--begin::Title--*/}
                                <div className="d-flex flex-column">
                                  <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">
                                    "Landing UI Design" Launch
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">#24005</span>
                                </div>
                                {/*--end::Title--*/}
                              </div>
                              {/*--end::Item--*/}
                            </div>
                            {/*--end::Items--*/}
                          </div>
                          {/*--end::Recently viewed--*/}
                          {/*--begin::Empty--*/}
                          <div data-kt-search-element="empty" className="text-center d-none">
                            {/*--begin::Icon--*/}
                            <div className="pt-10 pb-10">
                              {/*--begin::Svg Icon | path: icons/duotune/files/fil024.svg--*/}
                              <span className="svg-icon svg-icon-4x opacity-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                    fill="black"
                                  />
                                  <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="black" />
                                  <rect
                                    x="13.6993"
                                    y="13.6656"
                                    width="4.42828"
                                    height="1.73089"
                                    rx="0.865447"
                                    transform="rotate(45 13.6993 13.6656)"
                                    fill="black"
                                  />
                                  <path
                                    d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              {/*--end::Svg Icon--*/}
                            </div>
                            {/*--end::Icon--*/}
                            {/*--begin::Message--*/}
                            <div className="pb-15 fw-bold">
                              <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                              <div className="text-muted fs-7">Please try again with a different query</div>
                            </div>
                            {/*--end::Message--*/}
                          </div>
                          {/*--end::Empty--*/}
                        </div>
                        {/*--end::Wrapper--*/}
                        {/*--begin::Preferences--*/}
                        <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                          {/*--begin::Heading--*/}
                          <h3 className="fw-bold text-dark mb-7">Advanced Search</h3>
                          {/*--end::Heading--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            <input
                              type="text"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Contains the word"
                              name="query"
                            />
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            {/*--begin::Radio group--*/}
                            <div className="nav-group nav-group-fluid">
                              {/*--begin::Option--*/}
                              <label>
                                <input type="radio" className="btn-check" name="type" value="has" checked={true} />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                              </label>
                              {/*--end::Option--*/}
                              {/*--begin::Option--*/}
                              <label>
                                <input type="radio" className="btn-check" name="type" value="users" />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Users
                                </span>
                              </label>
                              {/*--end::Option--*/}
                              {/*--begin::Option--*/}
                              <label>
                                <input type="radio" className="btn-check" name="type" value="orders" />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Orders
                                </span>
                              </label>
                              {/*--end::Option--*/}
                              {/*--begin::Option--*/}
                              <label>
                                <input type="radio" className="btn-check" name="type" value="projects" />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Projects
                                </span>
                              </label>
                              {/*--end::Option--*/}
                            </div>
                            {/*--end::Radio group--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            <input
                              type="text"
                              name="assignedto"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Assigned to"
                              value=""
                            />
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            <input
                              type="text"
                              name="collaborators"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Collaborators"
                              value=""
                            />
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            {/*--begin::Radio group--*/}
                            <div className="nav-group nav-group-fluid">
                              {/*--begin::Option--*/}
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="attachment"
                                  value="has"
                                  checked={true}
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                  Has attachment
                                </span>
                              </label>
                              {/*--end::Option--*/}
                              {/*--begin::Option--*/}
                              <label>
                                <input type="radio" className="btn-check" name="attachment" value="any" />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Any
                                </span>
                              </label>
                              {/*--end::Option--*/}
                            </div>
                            {/*--end::Radio group--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-5">
                            <select
                              name="timezone"
                              aria-label="Select a Timezone"
                              data-control="select2"
                              data-placeholder="date_period"
                              className="form-select form-select-sm form-select-solid"
                            >
                              <option value="next">Within the next</option>
                              <option value="last">Within the last</option>
                              <option value="between">Between</option>
                              <option value="on">On</option>
                            </select>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="row mb-8">
                            {/*--begin::Col--*/}
                            <div className="col-6">
                              <input
                                type="number"
                                name="date_number"
                                className="form-control form-control-sm form-control-solid"
                                placeholder="Lenght"
                                value=""
                              />
                            </div>
                            {/*--end::Col--*/}
                            {/*--begin::Col--*/}
                            <div className="col-6">
                              <select
                                name="date_typer"
                                aria-label="Select a Timezone"
                                data-control="select2"
                                data-placeholder="Period"
                                className="form-select form-select-sm form-select-solid"
                              >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                              </select>
                            </div>
                            {/*--end::Col--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Actions--*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                              data-kt-search-element="advanced-options-form-cancel"
                            >
                              Cancel
                            </button>
                            <a
                              href="../../demo7/dist/pages/search/horizontal.html"
                              className="btn btn-sm fw-bolder btn-primary"
                              data-kt-search-element="advanced-options-form-search"
                            >
                              Search
                            </a>
                          </div>
                          {/*--end::Actions--*/}
                        </form>
                        {/*--end::Preferences--*/}
                        {/*--begin::Preferences--*/}
                        <form data-kt-search-element="preferences" className="pt-1 d-none">
                          {/*--begin::Heading--*/}
                          <h3 className="fw-bold text-dark mb-7">Search Preferences</h3>
                          {/*--end::Heading--*/}
                          {/*--begin::Input group--*/}
                          <div className="pb-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Projects</span>
                              <input className="form-check-input" type="checkbox" value="1" checked={true} />
                            </label>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Targets</span>
                              <input className="form-check-input" type="checkbox" value="1" checked={true} />
                            </label>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Affiliate Programs
                              </span>
                              <input className="form-check-input" type="checkbox" value="1" />
                            </label>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Referrals</span>
                              <input className="form-check-input" type="checkbox" value="1" checked={true} />
                            </label>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Users</span>
                              <input className="form-check-input" type="checkbox" value="1" />
                            </label>
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Actions--*/}
                          <div className="d-flex justify-content-end pt-7">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                              data-kt-search-element="preferences-dismiss"
                            >
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-sm fw-bolder btn-primary">
                              Save Changes
                            </button>
                          </div>
                          {/*--end::Actions--*/}
                        </form>
                        {/*--end::Preferences--*/}
                      </div>
                      {/*--end::Menu--*/}
                    </div>
                    {/*--end::Search--*/}
                    {/*--begin::Filter--*/}
                    <div className="flex-shrink-0 ms-2">
                      {/*--begin::Menu toggle--*/}
                      <button
                        type="button"
                        className="btn btn-icon btn-bg-light btn-active-icon-primary btn-color-gray-400"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*--begin::Svg Icon | path: icons/duotune/general/gen031.svg--*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </button>
                      {/*--end::Menu toggle--*/}
                      {/*--begin::Menu--*/}
                      {/*--begin::Menu 1--*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                        data-kt-menu="true"
                        id="kt_menu_613574eb23ae6"
                      >
                        {/*--begin::Header--*/}
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                        </div>
                        {/*--end::Header--*/}
                        {/*--begin::Menu separator--*/}
                        <div className="separator border-gray-200"></div>
                        {/*--end::Menu separator--*/}
                        {/*--begin::Form--*/}
                        <div className="px-7 py-5">
                          {/*--begin::Input group--*/}
                          <div className="mb-10">
                            {/*--begin::Label--*/}
                            <label className="form-label fw-bold">Status:</label>
                            {/*--end::Label--*/}
                            {/*--begin::Input--*/}
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-placeholder="Select option"
                                data-dropdown-parent="#kt_menu_613574eb23ae6"
                                data-allow-clear="true"
                              >
                                <option></option>
                                <option value="1">Approved</option>
                                <option value="2">Pending</option>
                                <option value="2">In Process</option>
                                <option value="2">Rejected</option>
                              </select>
                            </div>
                            {/*--end::Input--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-10">
                            {/*--begin::Label--*/}
                            <label className="form-label fw-bold">Member Type:</label>
                            {/*--end::Label--*/}
                            {/*--begin::Options--*/}
                            <div className="d-flex">
                              {/*--begin::Options--*/}
                              <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                <input className="form-check-input" type="checkbox" value="1" />
                                <span className="form-check-label">Author</span>
                              </label>
                              {/*--end::Options--*/}
                              {/*--begin::Options--*/}
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="2" checked={true} />
                                <span className="form-check-label">Customer</span>
                              </label>
                              {/*--end::Options--*/}
                            </div>
                            {/*--end::Options--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Input group--*/}
                          <div className="mb-10">
                            {/*--begin::Label--*/}
                            <label className="form-label fw-bold">Notifications:</label>
                            {/*--end::Label--*/}
                            {/*--begin::Switch--*/}
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                name="notifications"
                                checked={true}
                              />
                              <label className="form-check-label">Enabled</label>
                            </div>
                            {/*--end::Switch--*/}
                          </div>
                          {/*--end::Input group--*/}
                          {/*--begin::Actions--*/}
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              Reset
                            </button>
                            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">
                              Apply
                            </button>
                          </div>
                          {/*--end::Actions--*/}
                        </div>
                        {/*--end::Form--*/}
                      </div>
                      {/*--end::Menu 1--*/}
                      {/*--end::Menu--*/}
                    </div>
                    {/*--end::Filter--*/}
                  </div>
                  {/*--end::Toolbar--*/}
                  {/*--begin::Projects--*/}
                  <div className="m-0">
                    {/*--begin::Heading--*/}
                    <h1 className="text-gray-800 fw-bold mb-6 mx-5">Projects</h1>
                    {/*--end::Heading--*/}
                    {/*--begin::Items--*/}
                    <div className="mb-10">
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/bebo.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Briviba SaaS</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By James</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/vimeo.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Vine Quick Reports</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By Andres</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/kickstarter.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">KC Account CRM</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By Keenthemes</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/balloon.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Baloon SaaS</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By SIA Team</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/infography.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Most Cloudy UMC</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By Andrei</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/disqus.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Disqus Forum</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By Disqus Inc.</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                      {/*--begin::Item--*/}
                      <a
                        href="../../demo7/dist/pages/projects/project.html"
                        className="custom-list d-flex align-items-center px-5 py-4"
                      >
                        {/*--begin::Symbol--*/}
                        <div className="symbol symbol-40px me-5">
                          <span className="symbol-label">
                            <img
                              src="assets/media/svg/brand-logos/plurk.svg"
                              className="h-50 align-self-center"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*--end::Symbol--*/}
                        {/*--begin::Description--*/}
                        <div className="d-flex flex-column flex-grow-1">
                          {/*--begin::Title--*/}
                          <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Proove Quick CRM</h5>
                          {/*--end::Title--*/}
                          {/*--begin::Link--*/}
                          <span className="text-gray-400 fw-bold">By Proove Limited</span>
                          {/*--end::Link--*/}
                        </div>
                        {/*--begin::Description--*/}
                      </a>
                      {/*--end::Item--*/}
                    </div>
                    {/*--end::Items--*/}
                  </div>
                  {/*--end::Projects--*/}
                </div>
                {/*--end::Wrapper--*/}
              </div>
              {/*--end::Tab pane--*/}
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade" id="kt_aside_nav_tab_menu" role="tabpanel">
                {/*--begin::Menu--*/}
                <div
                  className="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0"
                  id="kt_aside_menu"
                  data-kt-menu="true"
                >
                  <div id="kt_aside_menu_wrapper" className="menu-fit">
                    <div className="menu-item">
                      <div className="menu-content pb-2">
                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">Dashboard</span>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link active" href="../../demo7/dist/index.html">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen025.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                              <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                              <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                              <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Default</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link" href="../../demo7/dist/landing.html">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/communication/com001.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="black"
                              />
                              <path
                                d="M19 10.4C19 10.3 19 10.2 19 10C19 8.9 18.1 8 17 8H16.9C15.6 6.2 14.6 4.29995 13.9 2.19995C13.3 2.09995 12.6 2 12 2C11.9 2 11.8 2 11.7 2C12.4 4.6 13.5 7.10005 15.1 9.30005C15 9.50005 15 9.7 15 10C15 11.1 15.9 12 17 12C17.1 12 17.3 12 17.4 11.9C18.6 13 19.9 14 21.4 14.8C21.4 14.8 21.5 14.8 21.5 14.9C21.7 14.2 21.8 13.5 21.9 12.7C20.9 12.1 19.9 11.3 19 10.4Z"
                                fill="black"
                              />
                              <path
                                d="M12 15C11 13.1 10.2 11.2 9.60001 9.19995C9.90001 8.89995 10 8.4 10 8C10 7.1 9.40001 6.39998 8.70001 6.09998C8.40001 4.99998 8.20001 3.90005 8.00001 2.80005C7.30001 3.10005 6.70001 3.40002 6.20001 3.90002C6.40001 4.80002 6.50001 5.6 6.80001 6.5C6.40001 6.9 6.10001 7.4 6.10001 8C6.10001 9 6.80001 9.8 7.80001 10C8.30001 11.6 9.00001 13.2 9.70001 14.7C7.10001 13.2 4.70001 11.5 2.40001 9.5C2.20001 10.3 2.10001 11.1 2.10001 11.9C4.60001 13.9 7.30001 15.7 10.1 17.2C10.2 18.2 11 19 12 19C12.6 20 13.2 20.9 13.9 21.8C14.6 21.7 15.3 21.5 15.9 21.2C15.4 20.5 14.9 19.8 14.4 19.1C15.5 19.5 16.5 19.9 17.6 20.2C18.3 19.8 18.9 19.2 19.4 18.6C17.6 18.1 15.7 17.5 14 16.7C13.9 15.8 13.1 15 12 15Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Landing Page</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <div className="menu-content pt-8 pb-2">
                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">Crafted</span>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                                fill="black"
                              />
                              <path
                                d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Pages</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Profile</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/overview.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Overview</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/projects.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Projects</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/campaigns.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Campaigns</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/documents.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Documents</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/connections.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Connections</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/profile/activity.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Activity</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Projects</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">My Projects</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/project.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">View Project</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/targets.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Targets</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/budget.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Budget</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/files.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Files</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/activity.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Activity</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/projects/settings.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Settings</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/wizards/horizontal.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Horizontal</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/wizards/vertical.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Vertical</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Search</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/search/horizontal.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Horizontal</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/search/vertical.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Vertical</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Blog</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/blog/home.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Blog Home</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/blog/post.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Blog Post</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Company</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/about.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">About Us</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/pricing.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Pricing</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/contact.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Contact Us</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/team.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Our Team</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/licenses.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Licenses</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/company/sitemap.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sitemap</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Careers</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/careers/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Careers List</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/careers/apply.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Careers Apply</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">FAQ</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/faq/classic.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Classic</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/pages/faq/extended.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Extended</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/communication/com013.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                fill="black"
                              />
                              <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black" />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Account</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/overview.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Overview</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/settings.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/security.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Security</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/billing.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Billing</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/statements.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Statements</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/referrals.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Referrals</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/account/api-keys.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">API Keys</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/technology/teh004.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                fill="black"
                              />
                              <path
                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Authentication</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Basic Flow</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/basic/sign-in.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/basic/sign-up.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/basic/two-steps.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/basic/password-reset.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Password Reset</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/basic/new-password.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Aside Flow</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/aside/sign-in.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/aside/sign-up.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/aside/two-steps.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/aside/password-reset.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Password Reset</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/aside/new-password.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Dark Flow</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/dark/sign-in.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/dark/sign-up.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/authentication/flows/dark/two-steps.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/dark/password-reset.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Password Reset</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/flows/dark/new-password.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="../../demo7/dist/authentication/extended/multi-steps-sign-up.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Multi-steps Sign-up</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="../../demo7/dist/authentication/extended/free-trial-sign-up.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Free Trial Sign-up</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/extended/coming-soon.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Coming Soon</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/general/welcome.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Welcome Message</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/general/verify-email.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Verify Email</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="../../demo7/dist/authentication/general/password-confirmation.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Password Confirmation</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/general/deactivation.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Account Deactivation</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/general/error-404.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Error 404</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/authentication/general/error-500.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Error 500</span>
                          </a>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Email Templates</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/email/verify-email.html"
                                target="blank"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Verify Email</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/email/invitation.html"
                                target="blank"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Account Invitation</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/email/password-reset.html"
                                target="blank"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Password Reset</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/authentication/email/password-change.html"
                                target="blank"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Password Changed</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/art/art009.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 18.3V4H20H5C4.4 4 4 4.4 4 5V20C10.9 20 16.7 15.6 19 9.5V18.3C18.4 18.6 18 19.3 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 19.3 21.6 18.6 21 18.3Z"
                                fill="black"
                              />
                              <path
                                d="M22 4C22 2.9 21.1 2 20 2C18.9 2 18 2.9 18 4C18 4.7 18.4 5.29995 18.9 5.69995C18.1 12.6 12.6 18.2 5.70001 18.9C5.30001 18.4 4.7 18 4 18C2.9 18 2 18.9 2 20C2 21.1 2.9 22 4 22C4.8 22 5.39999 21.6 5.79999 20.9C13.8 20.1 20.1 13.7 20.9 5.80005C21.6 5.40005 22 4.8 22 4Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Modals</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">General</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/general/invite-friends.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Invite Friends</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/general/view-users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">View Users</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/general/upgrade-plan.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Upgrade Plan</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/general/share-earn.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Share &amp; Earn</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Forms</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/forms/new-target.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Target</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/forms/new-card.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Card</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/forms/new-address.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">New Address</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/forms/create-api-key.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Create API Key</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="../../demo7/dist/modals/wizards/two-factor-authentication.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Two Factor Auth</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/wizards/create-app.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Create App</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/wizards/create-account.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Create Account</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/wizards/create-project.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Create Project</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/wizards/offer-a-deal.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Offer a Deal</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Search</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/search/users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/modals/search/select-location.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Select Location</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen022.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                                fill="black"
                              />
                              <path
                                d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Widgets</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/lists.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Lists</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/statistics.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Statistics</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/charts.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Charts</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/mixed.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Mixed</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/tables.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Tables</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/widgets/feeds.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Feeds</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-content pt-8 pb-2">
                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">Apps</span>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/finance/fin006.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="black"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/customers/getting-started.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Getting Started</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/customers/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Customer Listing</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/customers/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Customer Details</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Subscriptions</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/subscriptions/getting-started.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Getting Started</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/subscriptions/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Subscription List</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/subscriptions/add.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Add Subscription</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/subscriptions/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">View Subscription</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/finance/fin002.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d="M22 7H2V11H22V7Z" fill="black" />
                              <path
                                opacity="0.3"
                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Invoice Manager</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">View Invoices</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/invoices/view/invoice-1.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Invoice 1</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/invoices/view/invoice-2.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Invoice 2</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/invoices/create.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Create Invoice</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen051.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="black"
                              />
                              <path
                                d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">User Management</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Users</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/user-management/users/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users List</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/user-management/users/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">View User</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Roles</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/user-management/roles/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Roles List</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/user-management/roles/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">View Role</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/user-management/permissions.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Permissions</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/graphs/gra006.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Support Center</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/support-center/overview.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Overview</span>
                          </a>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Tickets</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/support-center/tickets/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Tickets List</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/support-center/tickets/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">View Ticket</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Tutorials</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-accordion">
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/support-center/tutorials/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Tutorials List</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="../../demo7/dist/apps/support-center/tutorials/post.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Tutorial Post</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/support-center/faq.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">FAQ</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/support-center/licenses.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Licenses</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/support-center/contact.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Contact Us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link" href="../../demo7/dist/apps/calendar.html">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen014.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                fill="black"
                              />
                              <path
                                d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                fill="black"
                              />
                              <path
                                d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Calendar</span>
                      </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                fill="black"
                              />
                              <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                              <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Chat</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/chat/private.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Private Chat</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/chat/group.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Group Chat</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="../../demo7/dist/apps/chat/drawer.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Drawer Chat</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-content pt-8 pb-0">
                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">Layout</span>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="https://preview.keenthemes.com/metronic8/demo7/layout-builder.html"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-dismiss="click"
                        data-bs-placement="right"
                      >
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen019.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Layout Builder</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <div className="menu-content">
                        <div className="separator mx-1 my-4"></div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link" href="../../demo7/dist/documentation/getting-started/changelog.html">
                        <span className="menu-icon">
                          {/*--begin::Svg Icon | path: icons/duotune/coding/cod003.svg--*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                        <span className="menu-title">Changelog v8.0.24</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/*--end::Menu--*/}
              </div>
              {/*--end::Tab pane--*/}
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade" id="kt_aside_nav_tab_subscription" role="tabpanel">
                {/*--begin::Subscription--*/}
                <div className="mx-5">
                  {/*--begin::Container--*/}
                  <div className="text-center pt-10 mb-20">
                    {/*--begin::Title--*/}
                    <h2 className="fs-2 fw-bolder mb-7">My Subscription</h2>
                    {/*--end::Title--*/}
                    {/*--begin::Description--*/}
                    <p className="text-gray-400 fs-4 fw-bold mb-10">
                      There are no customers added yet.
                      <br />
                      Kickstart your CRM by adding a your first customer
                    </p>
                    {/*--end::Description--*/}
                    {/*--begin::Action--*/}
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-target="#kt_modal_upgrade_plan"
                      data-bs-toggle="modal"
                    >
                      Upgrade Plan
                    </a>
                    {/*--end::Action--*/}
                  </div>
                  {/*--end::Container--*/}
                  {/*--begin::Illustration--*/}
                  <div className="text-center px-4">
                    <img src="assets/media/illustrations/sigma-1/18.png" alt="" className="mw-100 mh-300px" />
                  </div>
                  {/*--end::Illustration--*/}
                </div>
                {/*--end::Subscription--*/}
              </div>
              {/*--end::Tab pane--*/}
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade" id="kt_aside_nav_tab_tasks" role="tabpanel">
                {/*--begin::Tasks--*/}
                <div className="mx-5">
                  {/*--begin::Header--*/}
                  <h3 className="fw-bolder text-dark mb-10 mx-0">Tasks Overview</h3>
                  {/*--end::Header--*/}
                  {/*--begin::Body--*/}
                  <div className="mb-12">
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-success">
                          {/*--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                fill="black"
                              />
                              <path
                                d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          Project Briefing
                        </a>
                        <span className="text-muted fw-bold">Project Manager</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-warning">
                          {/*--begin::Svg Icon | path: icons/duotune/art/art005.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="black"
                              />
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          Concept Design
                        </a>
                        <span className="text-muted fw-bold">Art Director</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-primary">
                          {/*--begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                fill="black"
                              />
                              <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                              <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          Functional Logics
                        </a>
                        <span className="text-muted fw-bold">Lead Developer</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-danger">
                          {/*--begin::Svg Icon | path: icons/duotune/coding/cod008.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          Development
                        </a>
                        <span className="text-muted fw-bold">DevOps</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-info">
                          {/*--begin::Svg Icon | path: icons/duotune/general/gen049.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-info">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="black"
                              />
                              <path
                                d="M12.0006 11.1542C13.1434 11.1542 14.0777 10.22 14.0777 9.0771C14.0777 7.93424 13.1434 7 12.0006 7C10.8577 7 9.92348 7.93424 9.92348 9.0771C9.92348 10.22 10.8577 11.1542 12.0006 11.1542Z"
                                fill="black"
                              />
                              <path
                                d="M15.5652 13.814C15.5108 13.6779 15.4382 13.551 15.3566 13.4331C14.9393 12.8163 14.2954 12.4081 13.5697 12.3083C13.479 12.2993 13.3793 12.3174 13.3067 12.3718C12.9257 12.653 12.4722 12.7981 12.0006 12.7981C11.5289 12.7981 11.0754 12.653 10.6944 12.3718C10.6219 12.3174 10.5221 12.2902 10.4314 12.3083C9.70578 12.4081 9.05272 12.8163 8.64456 13.4331C8.56293 13.551 8.49036 13.687 8.43595 13.814C8.40875 13.8684 8.41781 13.9319 8.44502 13.9864C8.51759 14.1133 8.60828 14.2403 8.68991 14.3492C8.81689 14.5215 8.95295 14.6757 9.10715 14.8208C9.23413 14.9478 9.37925 15.0657 9.52439 15.1836C10.2409 15.7188 11.1026 15.9999 11.9915 15.9999C12.8804 15.9999 13.7421 15.7188 14.4586 15.1836C14.6038 15.0748 14.7489 14.9478 14.8759 14.8208C15.021 14.6757 15.1661 14.5215 15.2931 14.3492C15.3838 14.2312 15.4655 14.1133 15.538 13.9864C15.5833 13.9319 15.5924 13.8684 15.5652 13.814Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          Testing
                        </a>
                        <span className="text-muted fw-bold">QA Managers</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-success">
                          {/*--SVG file not found: icons/duotune/finance/fin006.svgFile-Upload.svg--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          HTML, CSS Coding
                        </a>
                        <span className="text-muted fw-bold">Art Director</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center">
                      {/*--begin::Symbol--*/}
                      <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-danger">
                          {/*--begin::Svg Icon | path: icons/duotune/graphs/gra008.svg--*/}
                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*--end::Svg Icon--*/}
                        </span>
                      </div>
                      {/*--end::Symbol--*/}
                      {/*--begin::Text--*/}
                      <div className="d-flex flex-column">
                        <a
                          href="../../demo7/dist/pages/profile/overview.html"
                          className="text-gray-800 text-hover-primary fs-6 fw-bold"
                        >
                          ReactJS Developer
                        </a>
                        <span className="text-muted fw-bold">Web, UI/UX Design</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Tasks--*/}
              </div>
              {/*--end::Tab pane--*/}
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade" id="kt_aside_nav_tab_notifications" role="tabpanel">
                {/*--begin::Notifications--*/}
                <div className="mx-5">
                  {/*--begin::Header--*/}
                  <h3 className="fw-bolder text-dark mb-10 mx-0">Notifications</h3>
                  {/*--end::Header--*/}
                  {/*--begin::Body--*/}
                  <div className="mb-12">
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-warning me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-warning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="black"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          Group lunch celebration
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 29 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-warning py-1">+28%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-success me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/files/fil008.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16.7 12.7C17.1 12.3 17.1 11.7 16.7 11.3C16.3 10.9 15.7 10.9 15.3 11.3L11 15.6L8.70001 13.3C8.30001 12.9 7.69999 12.9 7.29999 13.3C6.89999 13.7 6.89999 14.3 7.29999 14.7L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                              fill="black"
                            />
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          Navigation optimization
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-success py-1">+50%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-danger me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="black"
                            />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          Humbert Bresnen
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 5 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-danger py-1">-27%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-info rounded p-5 mb-7">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-info me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/finance/fin006.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                              fill="black"
                            />
                            <path
                              d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          Air B &amp; B - Real Estate
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 8 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-info py-1">+21%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-primary rounded p-5 mb-7">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-primary me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/arrows/arr031.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                          >
                            <path
                              d="M21 13V13.5C21 16 19 18 16.5 18H5.6V16H16.5C17.9 16 19 14.9 19 13.5V13C19 12.4 19.4 12 20 12C20.6 12 21 12.4 21 13ZM18.4 6H7.5C5 6 3 8 3 10.5V11C3 11.6 3.4 12 4 12C4.6 12 5 11.6 5 11V10.5C5 9.1 6.1 8 7.5 8H18.4V6Z"
                              fill="black"
                            />
                            <path
                              opacity="0.3"
                              d="M21.7 6.29999C22.1 6.69999 22.1 7.30001 21.7 7.70001L18.4 11V3L21.7 6.29999ZM2.3 16.3C1.9 16.7 1.9 17.3 2.3 17.7L5.6 21V13L2.3 16.3Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          B &amp; Q - Food Company
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 6 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-primary py-1">+12%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center bg-light-danger rounded p-5">
                      {/*--begin::Icon--*/}
                      <span className="svg-icon svg-icon-danger me-5">
                        {/*--begin::Svg Icon | path: icons/duotune/art/art005.svg--*/}
                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="black"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*--end::Svg Icon--*/}
                      </span>
                      {/*--end::Icon--*/}
                      {/*--begin::Title--*/}
                      <div className="flex-grow-1 me-2">
                        <a
                          href="../../demo7/dist/widgets/lists.html"
                          className="fw-bolder text-gray-800 text-hover-primary fs-6"
                        >
                          Nexa - Next generation
                        </a>
                        <span className="text-muted fw-bold d-block">Due in 4 Days</span>
                      </div>
                      {/*--end::Title--*/}
                      {/*--begin::Lable--*/}
                      <span className="fw-bolder text-danger py-1">+34%</span>
                      {/*--end::Lable--*/}
                    </div>
                    {/*--end::Item--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Notifications--*/}
              </div>
              {/*--end::Tab pane--*/}
              {/*--begin::Tab pane--*/}
              <div className="tab-pane fade" id="kt_aside_nav_tab_authors" role="tabpanel">
                {/*--begin::Authors--*/}
                <div className="mx-5">
                  {/*--begin::Header--*/}
                  <h3 className="fw-bolder text-dark mx-0 mb-10">Authors</h3>
                  {/*--end::Header--*/}
                  {/*--begin::Body--*/}
                  <div className="mb-12">
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-1.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Emma Smith
                        </a>
                        <span className="text-muted d-block fw-bold">Project Manager</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-4.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Sean Bean
                        </a>
                        <span className="text-muted d-block fw-bold">PHP, SQLite, Artisan CLI</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-12.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted d-block fw-bold">HTML5, jQuery, CSS3</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-6.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Dan Wilson
                        </a>
                        <span className="text-muted d-block fw-bold">MangoDB, Java</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-9.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Natali Trump
                        </a>
                        <span className="text-muted d-block fw-bold">NET, Oracle, MySQL</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center mb-7">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-8.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Francis Mitcham
                        </a>
                        <span className="text-muted d-block fw-bold">React, Vue</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                    {/*--begin::Item--*/}
                    <div className="d-flex align-items-center">
                      {/*--begin::Avatar--*/}
                      <div className="symbol symbol-50px me-5">
                        <img src="assets/media/avatars/150-7.jpg" className="" alt="" />
                      </div>
                      {/*--end::Avatar--*/}
                      {/*--begin::Text--*/}
                      <div className="flex-grow-1">
                        <a
                          href="../../demo7/dist/pages/projects/users.html"
                          className="text-dark fw-bolder text-hover-primary fs-6"
                        >
                          Jessie Clarcson
                        </a>
                        <span className="text-muted d-block fw-bold">Angular, React</span>
                      </div>
                      {/*--end::Text--*/}
                    </div>
                    {/*--end::Item--*/}
                  </div>
                  {/*--end::Body--*/}
                </div>
                {/*--end::Authors--*/}
              </div>
              {/*--end::Tab pane--*/}
            </div>
            {/*--end::Tab content--*/}
          </div>
          {/*--end::Wrapper--*/}
          {/*--begin::Footer--*/}
          <div className="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
            <a
              href="../../demo7/dist/documentation/getting-started.html"
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
              data-bs-toggle="tooltip"
              data-bs-custom-className="tooltip-dark"
              data-bs-trigger="hover"
              data-bs-offset="0,5"
              data-bs-dismiss-="click"
              title="200+ in-house components and 3rd-party plugins"
            >
              <span className="btn-label">Docs &amp; Components</span>
              {/*--begin::Svg Icon | path: icons/duotune/general/gen005.svg--*/}
              <span className="svg-icon btn-icon svg-icon-4 ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z"
                    fill="black"
                  />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
            </a>
          </div>
          {/*--end::Footer--*/}
        </div>
      </div>
      {/*--end::Workspace--*/}
    </div>
  );
}

export default AsideSecondary;
