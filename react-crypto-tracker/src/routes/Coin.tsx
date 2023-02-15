import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  Link,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";

import Chart from "./Chart";
import Price from "./Price";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.span`
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;

  a {
    display: block;
    color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
`;

interface CoinStateType {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const location = useLocation();
  const CoinName = location.state as CoinStateType;
  const { CoinId } = useParams();
  const [coin, setCoin] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();
  const [loading, setLoading] = useState(true);
  const priceMatch = useMatch("/:CoinId/price");
  const chartMatch = useMatch("/:CoinId/chart");

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/coins/${CoinId}`)
      .then((response) => response.json())
      .then((result) => {
        setCoin(result);
      });
    fetch(`https://api.coinpaprika.com/v1/tickers/${CoinId}`)
      .then((response) => response.json())
      .then((result) => {
        setPrice(result);
        setLoading(false);
      });
  }, [CoinId]);

  return (
    <Container>
      <Header>
        <Title>
          {CoinName?.name ? CoinName.name : loading ? "loading.." : coin?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coin?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${coin?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{coin?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{coin?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{price?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{price?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${CoinId}/price`}>Price</Link>
            </Tab>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${CoinId}/chart`}>Chart</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
