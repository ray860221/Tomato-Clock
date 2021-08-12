import styled from 'styled-components';

const TomatoClock = styled.div`
  width: 300px;
  height: 300px;
  background: #EA5548;
  border-radius: 50%;
  margin-top: 200px;
  margin-bottom: 50px;
  position: relative;
`;
const Leaf = styled.div`
  width: 60px;
  height: 75px;
  background: #316901;
  border-radius: 50px;
  position: absolute;
  right: 0px;
  transform: translate(-10px, 5px) rotate(45deg);
`;

const MainIniText = styled.div`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1.5px;
`;

const ClockText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  letter-spacing: 3.6px;
  color: #FCFCFC;
`;

const InitialClock = () => {
  return (
    <>
        <TomatoClock>
            <Leaf />
            <ClockText>
                PODOMORO
            </ClockText>
        </TomatoClock>
        <MainIniText>
            <div>
                You don’t have any task now,
            </div>
            <div>
                please add task first！
            </div>
        </MainIniText>
    </>
  );
}

export default InitialClock;
