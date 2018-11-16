import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;

  ${props => !props.visible && css`
    display: none;
  `}
`

export const Header = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

export const Meter = styled.div`
  width: 100%;
  padding: 4px;
  background: black;
`

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 0;
  background: #ccc;
`

export const ProgressBit = styled.div`
  width: 100%;
  height: 100%;

  ${props => props.index && css`
    background: hsla(${props.index}, 100%, 50%, 1);
  `}
`

export const Button = styled.button`
  position: absolute;
  left: calc(50% - 32px);
  bottom: 13px;
  z-index: 2;
  width: 64px;
  height: 64px;
  outline: none;
  cursor: pointer;
  background-size: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  filter: invert(1);
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS04MzgtMjIzMkg1NjJ2MzYwMEgtODM4eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNiAxMHYyOGwyMi0xNHoiLz48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);

  ${props => props.busy && css`
    background-size: 100%;
    background-image: url('https://loading.io/spinners/gauge/index.gauge-dashboard-preloader.svg');
  `}
`
