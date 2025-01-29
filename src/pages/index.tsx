import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { useState } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Deploy User Guide" description="Seamless crypto asset management">
      <div className={clsx('container', 'margin-vert--lg')}>
        <div className="row">
          {/* Sidebar - will stack on mobile */}
          <div className="col col--3">
            <div className="sticky-sidebar">
              <h3>Table of Contents</h3>
              <nav className="table-of-contents">
                <ul className="menu__list">
                  <li className="menu__list-item"><a className="menu__link" href="#what-is-deploy">What is Deploy?</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#getting-started">Getting Started</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#wallet-setup">Wallet Setup</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#api-key-setup">API Key Setup</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#supported-networks">Supported Networks</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#choosing-a-strategy">Choosing a Strategy</a></li>
                  <li className="menu__list-item"><a className="menu__link" href="#risk-management">Risk Management</a></li>
                </ul>
              </nav>
            </div>
          </div>

        {/* Main Content */}
        <main className="col col--9">
            <article className="padding-left--md">
              <h1>Deploy User Guide</h1>
          <p>Welcome to Deploy! This document serves as a comprehensive guide to help you navigate the platform, manage your funds, and make informed decisions.</p>

          <h2 id="what-is-deploy">What is Deploy?</h2>
          <p>Deploy is an AI-powered crypto asset management tool that provides seamless investment strategies and automated trading.</p>

          <h2 id="getting-started">Getting Started</h2>
          <ul>
            <li><strong>Login:</strong> Enter your email address and a six-digit verification code.</li>
            <li>A non-custodial AA wallet is automatically deployed and linked to your login.</li>
          </ul>

          <h2 id="wallet-setup">Wallet Setup</h2>
          <p>Deploy supports various assets based on your trading strategy:</p>
          <ul>
            <li><strong>Bitcoin Strategy:</strong> Deposit USDC.</li>
            <li><strong>Memecoin Strategy on Base/Ethereum:</strong> Deposit ETH.</li>
            <li><strong>Memecoin Strategy on Solana:</strong> Deposit SOL.</li>
          </ul>

          <h2 id="api-key-setup">API Key Setup</h2>
          <p>To enable trading via Deploy:</p>
          <ul>
            <li>Enter an API name (e.g., Memecoin Strategy, Bitcoin Base Strategy).</li>
            <li>Click “+Add API” in the settings.</li>
            <li>Deploy will autonomously connect to your wallet.</li>
          </ul>

          <h2 id="supported-networks">Supported Networks</h2>
          <p>Deploy supports the following networks:</p>
          <ul>
            <li>Ethereum</li>
            <li>Base</li>
            <li>Solana</li>
          </ul>

          <h2 id="choosing-a-strategy">Choosing a Strategy</h2>
          <p>Deploy offers tailored strategies for different investment approaches:</p>
          <ul>
            <li><strong>Memecoin Strategy:</strong> Focused on high-risk, high-reward investments.</li>
            <li><strong>Bitcoin Strategy:</strong> Moves funds between USDC and wrapped Bitcoin.</li>
          </ul>

          <h2 id="risk-management">Risk Management</h2>
          <p>Memecoins are high-risk assets. You should:</p>
          <ul>
            <li>Expect market fluctuations and potential losses.</li>
            <li>Ensure only a portion of your portfolio is allocated to these strategies.</li>
            <li>Consult a financial advisor before making large investments.</li>
          </ul>
          </article>
          </main>
        </div>
      </div>
    </Layout>
  );
}