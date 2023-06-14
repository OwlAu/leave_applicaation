/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card card-custom card-flush'>
            <div className='card-body d-flex align-items-center justify-content-around'>
              <div className='d-flex flex-column'>
                <div>Annual Leave</div>
                <div>100 Days</div>
                <div className='mt-5'>Expired at 2023 April 01</div>
              </div>
              <div className='d-flex  justify-content-center align-items-center'>
                <svg
                  fill='#ffffff'
                  height='45px'
                  width='45px'
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 254.3 256'
                  xmlSpace='preserve'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path d='M140.4,18.6c-12.2,0-22.1,9.9-22.1,22.1s9.9,22.1,22.1,22.1s22.1-9.9,22.1-22.1S152.6,18.6,140.4,18.6z M225.4,56.3 l-69.2,42.3L147.3,206c-0.5,7.1-6.5,12.6-13.6,12.6c-0.3,0-0.6,0-0.9,0l-43-2.7c-2.7-0.2-5.2-1.1-7.3-2.7l23.5-23.6l15.1,0.9 l1.5-21.4h-7.4l-38.4,38.6c-2.7,2.6-6.1,4-9.6,4c-3.4,0-6.8-1.3-9.5-3.8l-30.4-29.4c-5.4-5.2-5.5-13.8-0.3-19.2 c5.2-5.4,13.8-5.5,19.2-0.3L67.1,179l25.7-25.8l6.7-70L53,20.8c-3.9-5.2-2.8-12.6,2.4-16.4c5.2-3.9,12.6-2.8,16.4,2.4l42.7,57.2 l36.9,10l61.7-37.7c5.5-3.4,12.8-1.6,16.2,3.9C232.7,45.7,230.9,52.9,225.4,56.3z M92.2,226.4h7.9v19.7h-7.9V226.4z M76.5,226.4h7.9 V254h-7.9V226.4z M60.7,226.4h7.9v19.7h-7.9V226.4z'></path>{' '}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card card-custom card-flush'>
            <div className='card-body d-flex align-items-around justify-content-center'>
              <div className='d-flex flex-column'>
                <div>Medical Leave</div>
                <div>100 Days</div>
                <div className='mt-5'>Expired at 2023 April 01</div>
              </div>
              <div className='d-flex  justify-content-center align-items-center'>
                <svg
                  fill='#ffffff'
                  height='45px'
                  width='45px'
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 254.3 256'
                  xmlSpace='preserve'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path d='M140.4,18.6c-12.2,0-22.1,9.9-22.1,22.1s9.9,22.1,22.1,22.1s22.1-9.9,22.1-22.1S152.6,18.6,140.4,18.6z M225.4,56.3 l-69.2,42.3L147.3,206c-0.5,7.1-6.5,12.6-13.6,12.6c-0.3,0-0.6,0-0.9,0l-43-2.7c-2.7-0.2-5.2-1.1-7.3-2.7l23.5-23.6l15.1,0.9 l1.5-21.4h-7.4l-38.4,38.6c-2.7,2.6-6.1,4-9.6,4c-3.4,0-6.8-1.3-9.5-3.8l-30.4-29.4c-5.4-5.2-5.5-13.8-0.3-19.2 c5.2-5.4,13.8-5.5,19.2-0.3L67.1,179l25.7-25.8l6.7-70L53,20.8c-3.9-5.2-2.8-12.6,2.4-16.4c5.2-3.9,12.6-2.8,16.4,2.4l42.7,57.2 l36.9,10l61.7-37.7c5.5-3.4,12.8-1.6,16.2,3.9C232.7,45.7,230.9,52.9,225.4,56.3z M92.2,226.4h7.9v19.7h-7.9V226.4z M76.5,226.4h7.9 V254h-7.9V226.4z M60.7,226.4h7.9v19.7h-7.9V226.4z'></path>{' '}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card card-custom card-flush'>
            <div className='card-body d-flex align-items-around justify-content-center'>
              <div className='d-flex flex-column'>
                <div>Bonus Leave</div>
                <div>100 Days</div>
                <div className='mt-5'>Expired at 2023 April 01</div>
              </div>
              <div className='d-flex  justify-content-center align-items-center'>
                <svg
                  fill='#ffffff'
                  height='45px'
                  width='45px'
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 254.3 256'
                  xmlSpace='preserve'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path d='M140.4,18.6c-12.2,0-22.1,9.9-22.1,22.1s9.9,22.1,22.1,22.1s22.1-9.9,22.1-22.1S152.6,18.6,140.4,18.6z M225.4,56.3 l-69.2,42.3L147.3,206c-0.5,7.1-6.5,12.6-13.6,12.6c-0.3,0-0.6,0-0.9,0l-43-2.7c-2.7-0.2-5.2-1.1-7.3-2.7l23.5-23.6l15.1,0.9 l1.5-21.4h-7.4l-38.4,38.6c-2.7,2.6-6.1,4-9.6,4c-3.4,0-6.8-1.3-9.5-3.8l-30.4-29.4c-5.4-5.2-5.5-13.8-0.3-19.2 c5.2-5.4,13.8-5.5,19.2-0.3L67.1,179l25.7-25.8l6.7-70L53,20.8c-3.9-5.2-2.8-12.6,2.4-16.4c5.2-3.9,12.6-2.8,16.4,2.4l42.7,57.2 l36.9,10l61.7-37.7c5.5-3.4,12.8-1.6,16.2,3.9C232.7,45.7,230.9,52.9,225.4,56.3z M92.2,226.4h7.9v19.7h-7.9V226.4z M76.5,226.4h7.9 V254h-7.9V226.4z M60.7,226.4h7.9v19.7h-7.9V226.4z'></path>{' '}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{' '}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
