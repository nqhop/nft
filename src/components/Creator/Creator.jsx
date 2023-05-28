import styled from "styled-components"
import avatar1 from 'assets/images/avatar.svg'
import { Button } from "components/Button"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .vatavar-info {
        display: flex;
    }
    img {
        margin-left: 8px;
        margin-right: 16px;
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .name{
        font-weight: 700;
    }
    .id{
        color: #747475;
        font-weight: 400;
        font-size: 12px;
    }
`
export const Creator = ({ name, id, avatar, follow, btnHeight, btnWidth, bgColor, textColor }) => {
    return <StyledDiv>
        <div className="vatavar-info">

            <img src={avatar} alt="" />
            <div className="info">
                <div className="name">{name}</div>
                <div className="id">{id}</div>
            </div>
        </div>
        <Button children='Follow' bgColor = {follow ? '#5429FF' : bgColor}
            textColor = {follow ? '#fff': textColor}
            width={btnWidth} height={btnHeight} />
    </StyledDiv>
}
Creator.defaultProps = {
    bgColor: 'background: rgba(84, 41, 255, 0.1)',
    btnWidth: '77px',
    btnHeight: '32px',
    children: 'Follow'
}