import React, {useState, useEffect, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import clsx from 'clsx'
import * as Yup from 'yup'
import {PasswordMeterComponent} from '../../../_metronic/assets/ts/components'
import {KTSVG} from '../../../_metronic/helpers'
import axios from 'axios'
import Select from 'react-select'
import {SelectBtn_Style} from '../General/SelectBtn_Style'
// import {customStyles} from '../components/CustomStyles'
// import {sortByName} from '../components/SortByName'

const UserManagement_Edit: React.FC = () => {
  const navigate = useNavigate()

  const API = String(process.env.REACT_APP_LEAVE_API)
  const location: any = useLocation()

  const session: any = localStorage.getItem('kt-auth-react-v')?.replace(/"/g, '')
  const selectMerchantRef = useRef<any>()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //PasswordMeterComponent.bootstrap()
  }, [])

  let initialValues = {
    empName: String(location.state.empName),
    password: String(location.state.password),
    email: String(location.state.email),
    address: String(location.state.address),
    bod: String(location.state.bod),
    maritalStatus: String(location.state.maritalStatus),
    phoneNo: String(location.state.phoneNo),
    group: String(location.state.group),
  }

  const create_user_schema = Yup.object().shape({
    empName: Yup.string()
      .trim('No white spaces')
      .strict(true)
      .required('Employee Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Minimum 8 symbols')
      .max(50, 'Maximum 50 symbols')
      .matches(
        /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
        'Use 8 or more characters with a mix of letters, numbers & symbols.'
      ),
    email: Yup.string().email('Email format incorrent').required('Email is required'),
    address: Yup.string().required('Address is required'),
    bod: Yup.string().required('Date of Birth is required'),
    maritalStatus: Yup.string().required('Marital Status is required'),
    phoneNo: Yup.string()
      .required('Phone number is required.')
      .matches(/^\d+$/, 'Only Numbers are allowed.'),
    group: Yup.string().required('Group is required'),
    // changepassword: Yup.string()
    //   .required('Password confirmation is required')
    //   .when('password', {
    //     is: (val: string) => (val && val.length > 0 ? true : false),
    //     then: Yup.string().oneOf(
    //       [Yup.ref('password')],
    //       "Password and Confirm Password didn't match"
    //     ),
    //   }),
  })

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: create_user_schema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)

      try {
        axios
          .post(`${API}/admin/createNewUser`, values, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(function (response) {
            setLoading(false)
            navigate(-1)
            alert(response.data.message)
          })
          .catch(function (error) {
            alert(error)
          })
      } catch (error) {}
    },
  })

  return (
    <div>
      <div className='d-flex justify-content-start'>
        <a
          onClick={() => navigate(-1)}
          className='btn btn-sm btn-flex fw-bold btn-color-white-700 btn-danger ms-3'
        >
          Back
        </a>
        <span className='text-gray-800 fs-1 fw-bolder ms-5 d-flex align-items-center'>
          Edit User : {location.state.empName}
        </span>
      </div>{' '}
      <div className='card card-custom card-flush mt-5 ms-3'>
        <form onSubmit={formik.handleSubmit} className='m-10'>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Employee Name</label>
            <input
              placeholder='Enter employee name'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('empName')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.empName && formik.errors.empName,
                },
                {
                  'is-valid': formik.touched.empName && !formik.errors.empName,
                }
              )}
            />
            {formik.touched.empName && formik.errors.empName && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.empName}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Password</label>
            <input
              placeholder='Enter password'
              type='password'
              disabled={true}
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Email</label>
            <input
              placeholder='Enter email'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.email && formik.errors.email,
                },
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.email}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Phone Number</label>
            <input
              placeholder='Enter phone number'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('phoneNo')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.phoneNo && formik.errors.phoneNo,
                },
                {
                  'is-valid': formik.touched.phoneNo && !formik.errors.phoneNo,
                }
              )}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.phoneNo}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Address</label>
            <input
              placeholder='Enter address'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('address')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.address && formik.errors.address,
                },
                {
                  'is-valid': formik.touched.address && !formik.errors.address,
                }
              )}
            />
            {formik.touched.address && formik.errors.address && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.address}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Birthday</label>
            <input
              placeholder='Enter birthday'
              type='date'
              autoComplete='off'
              {...formik.getFieldProps('bod')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.bod && formik.errors.bod,
                },
                {
                  'is-valid': formik.touched.bod && !formik.errors.bod,
                }
              )}
            />
            {formik.touched.bod && formik.errors.bod && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.bod}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Marital Status</label>
            <select
              {...formik.getFieldProps('maritalStatus')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.maritalStatus && formik.errors.maritalStatus,
                },
                {
                  'is-valid': formik.touched.maritalStatus && !formik.errors.maritalStatus,
                }
              )}
              data-placeholder=''
            >
              <option value=''>Please Select</option>
              <option value='single'>Single</option>
              <option value='married'>Married</option>
              <option value='divorced'>Divorced</option>
              <option value='widowed'>Widowed</option>
            </select>
          </div>
          <div className='fv-row mb-8'>
            <label className='form-label required fw-bolder text-dark fs-6'>Group</label>
            <select
              {...formik.getFieldProps('group')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.maritalStatus && formik.errors.maritalStatus,
                },
                {
                  'is-valid': formik.touched.maritalStatus && !formik.errors.maritalStatus,
                }
              )}
              data-placeholder=''
            >
              <option value=''>Please Select</option>
              <option value='IT'>IT</option>
              <option value='QA'>QA</option>
              <option value='INFRA'>INFRA</option>
              <option value='MANAGEMENT'>MANAGEMENT</option>
            </select>
            {formik.touched.group && formik.errors.group && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.group}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Form group */}
          <div className='text-center'>
            <button
              type='submit'
              id='kt_sign_up_submit'
              className='btn btn-lg btn-primary w-100 mb-5'
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            >
              {!loading && <span className='indicator-label'>Submit</span>}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>{' '}
          {/* end::Form group */}
        </form>
      </div>
    </div>
  )
}

export default UserManagement_Edit
