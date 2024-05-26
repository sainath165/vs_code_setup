'use client';
import React, { useState } from 'react';
import styles from './Table.module.css';
type TableRow = {
  orgId: string;
  name: string;
  accountType: string;
  country: string;
  region: string;
  renewableDate: string;
  contactValue: string;
  users: number;
};

const tableData: TableRow[] = [
  {
    orgId: '001',
    name: 'Company A',
    accountType: 'Premium',
    country: 'USA',
    region: 'North America',
    renewableDate: '2023/12/31',
    contactValue: '$1000',
    users: 10,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '002',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '005',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '006',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '007',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '008',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '009',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },
  {
    orgId: '010',
    name: 'Company B',
    accountType: 'Basic',
    country: 'Canada',
    region: 'North America',
    renewableDate: '2024/01/15',
    contactValue: '$500',
    users: 5,
  },

  // Add more rows as needed
];

const regions = ['Middle East', 'South East', 'North America', 'Europe', 'Asia'];
const accountTypes = ['Premium', 'Basic', 'Trial', 'Freemium'];

type TableProps = {
  data?: TableRow[];
};

const Table: React.FC<TableProps> = ({ data = tableData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const filtered = data.filter(row => {
      return (
        (searchTerm === '' || row.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedRegion === '' || row.region === selectedRegion) &&
        (selectedAccountType === '' || row.accountType === selectedAccountType)
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
        pageNumbers.push('...');
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className={styles.ellipsis}>
          ...
        </span>
      ) : (
        <button
          key={index}
          className={`${styles.pageButton} ${
            currentPage === number ? styles.currentPage : ''
          }`}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
  <div>
    <label htmlFor="searchInput" className={styles.searchLabel}>What are you looking for?</label>
    <input
      id="searchInput"
      type="text"
      placeholder="Enter search term"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className={styles.searchInput}
    />
  </div>
  <div>
    <label htmlFor="regionSelect" className={styles.searchLabel}>Select Region</label>
    <select
      id="regionSelect"
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className={styles.searchSelect}
    >
      <option value="">Select Region</option>
      {regions.map((region, index) => (
        <option key={index} value={region}>{region}</option>
      ))}
    </select>
  </div>
  <div>
    <label htmlFor="accountTypeSelect" className={styles.searchLabel}>Select Account Type</label>
    <select
      id="accountTypeSelect"
      value={selectedAccountType}
      onChange={(e) => setSelectedAccountType(e.target.value)}
      className={styles.searchSelect}
    >
      <option value="">Select Account Type</option>
      {accountTypes.map((type, index) => (
        <option key={index} value={type}>{type}</option>
      ))}
    </select>
  </div>
  <button type="submit" className={styles.searchButton}>Search</button>
</form>

      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ORG ID</th>
            <th className={styles.tableHeader}>NAME</th>
            <th className={styles.tableHeader}>ACCOUNT TYPE</th>
            <th className={styles.tableHeader}>COUNTRY</th>
            <th className={styles.tableHeader}>REGION</th>
            <th className={styles.tableHeader}>RENEWABLE DATE</th>
            <th className={styles.tableHeader}>CONTACT VALUE</th>
            <th className={styles.tableHeader}>USERS</th>
          </tr>
        </thead>
        
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index} className={styles.tableRow}>
            <td className={styles.tableCell}><a href={`/${row.orgId}`}>{row.orgId}</a></td>
              <td className={styles.tableCell}>{row.name}</td>
              <td className={styles.tableCell}>{row.accountType}</td>
              <td className={styles.tableCell}>{row.country}</td>
              <td className={styles.tableCell}>{row.region}</td>
              <td className={styles.tableCell}>{row.renewableDate}</td>
              <td className={styles.tableCell}>{row.contactValue}</td>
              <td className={styles.tableCell}>{row.users}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Table;
