import React from 'react';

import '../../style/index.scss';
import Aside from '../Aside';

function Demo7() {
  return (
    <div className="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled">
      <div className="d-flex flex-column flex-root">
        {/*--begin::Page--*/}
        <div className="page d-flex flex-row flex-column-fluid">
          <Aside />
          {/*--begin::Wrapper--*/}
          <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper"></div>
          {/*--end::Wrapper--*/}
        </div>
        {/*--end::Page--*/}
      </div>
    </div>
  );
}

export default Demo7;
