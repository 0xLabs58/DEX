# Dex Platform

**Website:**

The website contains modules like Trade, Dashboard, Earn and Buy.

1. Trade
In the Trade Page, User can see the trading view graph of each Tokens you selected.
    - Current Token Price, Token Volume and High / Low Price for 24 hours
    - Trading History and Wallet Position of Trading, Sell / Buy Token Orders
    
    In the Exchange section of Trading page, user can select Tokens, Amount, Leverage, Exchange Action Type.
    The Tokens and Amount of Wallet will be auto-placeholder in the Max and Token lists
    
2. Dashboard
    
    The dashboard page displays the current status of Exchange.
    
    - 24h Volume
    - Open Interest
    - Long Positions
    - Short Positions
    - Overview of Pool
    - Total Stats of Exchange
    - Stats of governance Token (UTX and ULP)
    - ULP / UTX Index Composition (Pair of Liquidity Pool)
3. Earn`
    
    This Page is for Staking UTX/ULP Token & Earning Rewards(esUTX)
    
    - Overview of connected Wallet
        
        Owned UTX, esUTX, ULP, Claimable Rewards
        
        - User can Buy Tokens for Staking
        - Unstake Tokens from Each Pool
        - Claim Reward Tokens of Each Pool.
    - Overview of Staking Pools
        
        Example: UTX Staking Pool - Reward esUTX & U2U
        
        - Total Staked Tokens of each Pool
        - Reward Token Price
        - Total Supply of the Reward Token
        - APR / Multiplier Point APR
        - Staked Multiplier Points (Referral System)
    - Vault Vesting
    Convert Rewards to UTX
        - Deposit Rewards to the Pool
        - Withdraw Rewards to the Pool
        - Claim UTX
4. Buy
    
    User easily buy UTX or ULP using his favorite payment methods
    
    UTX is the utility and governance token. Accrues 30% of the platform's generated fees.
    
    ULP is the liquidity provider token. Accrues 70% of the platform's generated fees.
    
    - UTX
        - buy UTX from Decentralized Exchanges.
        There are many links of Decentralized Exchanges here
        - Buy UTX from Centralized Services
            
            There are many links of Centralized Exchanges here
            
    - ULP
        
        User can buy / Sell ULP from Exchange direactly.
        
        - Sell / Buy Listed Token (ETH, USDT, BTC, BNB)

**Run Locally:**

Node version

```bash
  node -v
  18.19.0
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
