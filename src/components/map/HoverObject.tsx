import React, { useRef, useEffect, useState } from 'react';
import { Popup } from 'react-map-gl';
import styled from 'styled-components';

export interface HoverObjectProps {
  message_addr: string;
  message_status: string;
  message_date: string;
  message_style: string;
  pointer: number[];
}
export interface StyledProps {
  pointer: number[];
  width: number;
  height: number;
}

const StyledSpan = styled.span`
  padding: 1rem 1rem 0.2rem 1rem;
  margin: 2rem auto;
  color: ${props => props.theme.colorTextLight};
`;
const Bubble = styled.div<StyledProps>`
  height: 150px;
  line-height: 30px;
  font-size: ${props => props.theme.fontSizeL};
  box-sizing: border-box;
  box-shadow: rgba(51, 51, 102, 0.5) 2px 2px 2px;
  font-family: ${props => props.theme.fontFamily};
  position: absolute;
  z-index: 10;
  pointer-events: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  left: ${props => props.pointer[0] - props.width / 2 - 3}px;
  top: ${props => props.pointer[1] - 45}px;
  background-color: #ffffff;
  margin: 0 auto;
  &::after {
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border-width: 7px;
    border-style: solid;
    border-color: transparent #fff #fff transparent;
    content: '';
    position: absolute;
    bottom: -6px;
    left: 48%;
    box-shadow: rgba(51, 51, 102, 0.5) 2px 2px 2px;
  }
`;

export const HoverObject: React.FC<HoverObjectProps> = ({
  message_addr,
  message_status,
  message_date,
  message_style,
  pointer,
}) => {
  const refBubble = useRef<HTMLDivElement | null>(null);
  const [widthBubble, setWidthBubble] = useState(0);
  const [heightBubble, setHeightBubble] = useState(0);

  useEffect(() => {
    if (!refBubble) return;
    const w = refBubble.current ? refBubble.current?.offsetWidth : 0;
    const h = refBubble.current ? refBubble.current?.offsetHeight : 0;
    setWidthBubble(w);
    setHeightBubble(h);
  }, [refBubble.current]);

  return (
    <Popup
      latitude={52.520008}
      longitude={13.404954}
      closeButton={false}
      closeOnClick={false}
      anchor={'top'}
      /* onClose={() => this.setState({ showPopup: false })} */
    >
      <div>
        <StyledSpan>
          <b>Öffentliche Straßenpumpe</b>
        </StyledSpan>
        <br></br>
        <StyledSpan>
          <b>Status:</b> {message_status}
        </StyledSpan>
        <br></br>
        <StyledSpan>
          <b>Standort:</b> {message_addr}
        </StyledSpan>
        <br></br>
        <StyledSpan>
          <b>Pumpentyp:</b> {message_style}
        </StyledSpan>
        <br></br>
        <StyledSpan>
          <b>Letzter Status-Check:</b> {message_date}
        </StyledSpan>
      </div>
    </Popup>
    /* <Pop>
      <div>
        <Bubble
          className='is-size-7'
          ref={refBubble}
          pointer={pointer}
          width={widthBubble}
          height={heightBubble}
        >
          <StyledSpan>
            <b>Öffentliche Straßenpumpe</b>
          </StyledSpan>
          <br></br>
          <StyledSpan>
            <b>Status:</b> {message_status}
          </StyledSpan>
          <br></br>
          <StyledSpan>
            <b>Standort:</b> {message_addr}
          </StyledSpan>
          <br></br>
          <StyledSpan>
            <b>Pumpentyp:</b> {message_style}
          </StyledSpan>
          <br></br>
          <StyledSpan>
            <b>Letzter Status-Check:</b> {message_date}
          </StyledSpan>
        </Bubble>
      </div>
    </Popup> */
  );
};
