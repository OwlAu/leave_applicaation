import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;
  .table {
    display: inline-block;

    .tr {
      &:last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(182, 173, 178, 0.2);
      border-right: 1px solid rgba(182, 173, 178, 0.2);

      position: relative;

      &:last-child {
        border-right: 0;
        position: sticky !important;
        right: 0;
        background-color: var(--bs-body-bg);
        display: flex !important;
        align-items: center;
        justify-content: center;
        border-left: 1px solid grey;
      }
      .resizer {
        display: inline-block;

        width: 10px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        touch-action: none;

        &.isResizing {
        }
      }
    }
  }
`
