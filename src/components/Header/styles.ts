import styled from "styled-components";

export const HeaderStyled = styled.header`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3.75rem 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.7s;

    .logo {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);

      span {
        color: var(--text2);
      }
    }

    .mobileMenu {
      display: none;
      border: none;
      background: none;
      border-top: 0.1875rem solid var(--text1);
      cursor: pointer;

      &::before,
      &::after {
        content: " ";
        display: block;
        width: 1.875rem;
        height: 0.1875rem;
        background: var(--text1);
        margin-top: 0.3125rem;

        position: relative;
        transition: .3s;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    a {
      font-size: 1.5rem;
      font-weight: 500;
      position: relative;
      padding-block: 1rem;

      &::after {
        content: " ";
        width: 0%;
        height: 0.25rem;
        background-color: var(--color-gree1);
        position: absolute;
        bottom: 10px;
        left: 0;
        transition: 0.4s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .scroll {
    background-color: var(--color-blue3);
    padding: 1.25rem 10%;

    @media (max-width: 1180px) {
      padding: 1.25rem 5% !important;
    }
  }

  @media (max-width: 1180px) {
    .container {
      padding: 2.75rem 5%;
    }
  }

  @media (max-width: 999px) {
    .container {
      background-color: var(--color-blue3);
      padding: 2rem 5%;

      .logo {
        font-size: 1.8rem;
      }

      .mobileMenu {
        position: fixed;
        right: 2rem;
        display: block;
        z-index: 1;

        &.active_btn {
          border-top-color: transparent;

          &::before {
            transform: rotate(135deg);
          }

          &::after {
            transform: rotate(-135deg);
            top: -7px;
          }
        }
      }

      .navigation {
        background-color: var(--color-blue3);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        flex-direction: column;
        justify-content: space-around;
        gap: 0;
        pointer-events: none;

        clip-path: circle(100px at 90% -15%);
        transition: .7s ease-out;

        li {
          a {
            opacity: 0;
          }
        }

        li:nth-child(1) {
          a {
            transition: 0.5s 0.2s;
          }
        }

        li:nth-child(2) {
          a {
            transition: 0.5s 0.4s;
          }
        }

        li:nth-child(3) {
          a {
            transition: 0.5s 0.6s;
          }
        }

        li:nth-child(4) {
          a {
            transition: 0.5s 0.8s;
          }
        }

        &.active {
          clip-path: circle(1600px at 90% -15%);
          pointer-events: all;

          li {
            a {
              opacity: 1;
            }
          }


        }
      }
    }
  }

  @media (max-width: 360px) {
    .container{
      .logo {
        font-size: 1.3rem;
      }
    }
  }
`;
