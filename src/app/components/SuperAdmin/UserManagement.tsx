import React, {Ref, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import {useLayout} from '../../../_metronic/layout/core'
// import {Filter} from './components/filter'
import {Column, useFlexLayout, useResizeColumns, useTable} from 'react-table'
import {Styles} from '../General/Table_Style'
import axios from 'axios'

const UserManagementPage: React.FC = () => {
  const {config} = useLayout()
  const API = String(process.env.REACT_APP_LEAVE_API)

  //States
  const [formData, setFormData] = useState([])
  const [showMetrics, setShowMetrics] = useState(false)

  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const items = formData

  const lastPage = Math.ceil(items.length / itemsPerPage)

  const changePage = (page: number) => {
    setCurrentPage(page)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const firstIndex = (currentPage - 1) * itemsPerPage
  const lastIndex = firstIndex + itemsPerPage
  let currentItems = items.length > 0 ? items.slice(firstIndex, lastIndex) : []
  //Pagincation

  useEffect(() => {
    axios
      .post(
        `${API}/admin/showAllUser`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function (response) {
        let result = response.data.employeeList
        console.log(response)
        setFormData(result)
      })
      .catch(function (error) {
        alert(error)
      })
  }, [])

  //Table::START
  interface Data {
    empId: string
    empName: string
    isHired: boolean
    createdDate: string
    approvedDate: string
    password: string
    address: string
    bod: string
    maritalStatus: string
    email: string
    phoneNo: string
  }

  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: 'Employee ID',
        accessor: 'empId',
      },
      {
        Header: 'Employee Name',
        accessor: 'empName',
      },
      {
        Header: 'Hire Status',
        accessor: (row) => {
          return row.isHired == true ? 'Hired' : 'Not Hired'
        },
      },
      {
        Header: 'Created Date',
        accessor: 'createdDate',
      },
      {
        Header: 'Approved Date',
        accessor: (row) => {
          return row.approvedDate == null ? 'Not Approved' : row.approvedDate
        },
      },

      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Birthday',
        accessor: (row) => {
          const dateString = row.bod
          const parts = dateString.split('-')
          const year = parts[0]
          const month = parts[1]
          const day = parts[2]

          const convertedDateString = `${day}-${month}-${year}`
          return convertedDateString
        },
      },
      {
        Header: 'Merital Status',
        accessor: 'maritalStatus',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone Number',
        accessor: 'phoneNo',
      },
      {
        Header: 'Action',
        accessor: (row) => {
          return (
            <Link
              to={`/user-management/edit/${row.empName}`}
              state={row}
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
            >
              <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
            </Link>
          )
        },
        width: 70,
      },
    ],
    []
  )
  interface TableProps {
    columns: Column<Data>[]
    data: Data[]
  }

  interface CheckboxProps {
    indeterminate?: boolean
    [x: string]: any
  }

  type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    indeterminate?: boolean
  }

  const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({indeterminate, ...rest}: Props, ref: Ref<HTMLInputElement>) => {
      const defaultRef = React.useRef<HTMLInputElement>(null)
      const resolvedRef: any = ref || defaultRef

      React.useEffect(() => {
        if (resolvedRef.current) {
          resolvedRef.current.indeterminate = indeterminate || false
        }
      }, [resolvedRef, indeterminate])

      return <input className='form-check-input me-3' type='checkbox' ref={resolvedRef} {...rest} />
    }
  )

  function Table({columns, data}: TableProps) {
    const defaultColumn = React.useMemo(
      () => ({
        minWidth: 30,
        width: 150,
        maxWidth: 400,
      }),
      []
    )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      allColumns,
      getToggleHideAllColumnsProps,
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFlexLayout,
      useResizeColumns
    )

    return (
      <>
        <div>
          <div
            className='card card-custom card-flush mb-5'
            id='selectMetricsWrapper'
            style={{
              display: showMetrics ? 'block' : 'none',
            }}
          >
            <div className='card-body py-5'>
              <div className='row row-cols-4 ms-3 justify-content-center'>
                <div className='col form-check form-check-custom form-check-solid form-check-sm w-200px'>
                  <div className='form-check-label d-flex m-5 fw-bold'>
                    <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle All
                  </div>
                </div>
                {allColumns
                  .filter((column) => column.Header !== ' ' && column.Header !== 'Action')
                  .map((column) => (
                    <div className='col form-check form-check-custom form-check-solid form-check-sm w-200px'>
                      <div key={column.id}>
                        <label className='form-check-label d-flex m-5'>
                          <input
                            className='form-check-input me-3'
                            type='checkbox'
                            {...column.getToggleHiddenProps()}
                          />{' '}
                          {String(column.Header)}
                        </label>
                      </div>
                    </div>
                  ))}
                <br />
              </div>
            </div>
          </div>
          <div className='card card-custom p-5'>
            <div className='table-responsive mb-5'>
              <div {...getTableProps()} className='table' style={{width: '100%'}}>
                <div>
                  {headerGroups.map((headerGroup) => (
                    <div
                      {...headerGroup.getHeaderGroupProps()}
                      className='tr fw-bold fs-6 text-gray-800 border-bottom border-gray-200'
                    >
                      {headerGroup.headers.map((column) => (
                        <div {...column.getHeaderProps()} className='th'>
                          {column.render('Header')}
                          {/* Use column.getResizerProps to hook up the events correctly */}
                          <div
                            {...(column as any).getResizerProps()}
                            className={`resizer ${(column as any).isResizing ? 'isResizing' : ''}`}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                      <div {...row.getRowProps()} className='tr'>
                        {row.cells.map((cell) => {
                          return (
                            <div {...cell.getCellProps()} className='td'>
                              {cell.render('Cell')}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  //Table::END

  return (
    <div>
      <div className='d-flex justify-content-between mb-5'>
        {/* <FilterButton /> */}
        <div className='m-0'>
          <Link
            to='/user-management/create-user'
            className='btn btn-sm btn-flex fw-bold btn-color-white-700 btn-primary ms-3'
          >
            Add User
          </Link>{' '}
        </div>

        <div className='m-0 d-flex'>
          <button
            type='button'
            className='btn btn-sm btn-flex fw-bold rotate'
            onClick={(e) => {
              setShowMetrics(!showMetrics)
              e.currentTarget.classList.toggle('active')
            }}
          >
            <KTSVG
              path='/media/icons/duotune/arrows/arr004.svg'
              className='svg-icon-6 svg-icon-muted me-1 rotate-180'
            />{' '}
            Select Metrics
          </button>
        </div>
      </div>{' '}
      {/* <Filter setFormData={setFormData} /> */}
      <Styles>
        <Table columns={columns} data={currentItems == undefined ? [] : currentItems} />
      </Styles>
      {/* Pagination START */}
      <div className='mt-5 d-flex justify-content-center align-items-center'>
        <span className='me-5'>Total: {formData.length}</span>
        <button
          className='btn btn-secondary p-2 me-2 w-100px h-30px'
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        {currentPage} of {lastPage}
        <button
          className='btn btn-secondary p-2 ms-2 w-100px h-30px'
          disabled={currentPage === lastPage}
          onClick={nextPage}
        >
          Next
        </button>
        <select
          onChange={(e) => changePage(Number(e.target.value))}
          className='btn btn-secondary p-2 ms-2 w-100px h-30px'
        >
          {Array.from({length: lastPage}, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Page {i + 1}
            </option>
          ))}
        </select>
      </div>
      {/* Pagination END */}
    </div>
  )
}

export default UserManagementPage
