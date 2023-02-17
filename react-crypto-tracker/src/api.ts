const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(CoinId?: string) {
  return fetch(`${BASE_URL}/coins/${CoinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinTickers(CoinId?: string) {
  return fetch(`${BASE_URL}/tickers/${CoinId}`).then((response) =>
    response.json()
  );
}
