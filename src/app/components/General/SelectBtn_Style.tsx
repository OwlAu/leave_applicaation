export const SelectBtn_Style = {
  control: (base: any, state: {isFocused: any} & {isDisabled: any}) => ({
    ...base,
    background: state.isDisabled ? '#2b2b40' : 'transparent',
    borderColor: '#323248',
  }),
  menu: (base: any) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base: any) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    color: 'black',
  }),
  input: (base: any) => ({
    ...base,
    color: '#fff',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: localStorage.getItem('kt_theme_mode_value') == 'dark' ? 'white' : 'black',
  }),
}
