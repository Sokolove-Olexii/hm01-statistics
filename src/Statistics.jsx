import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  background-color: #ecf1f4;
  width: 360px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0 10px;
  font-size: 20px;
`;

const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  color: white;
  background-color: ${() => getRandomColor()};
`;

const Label = styled.span`
  display: block;
  font-size: 14px;
`;

const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Item className="item" key={id}>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
