import React, { useState, useCallback, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

import api from '../../axios/api';

import styles from './ModelGrid.module.scss';

const ModelGrid = (props) => {
  const [data, setData] = useState([]);

  const load = useCallback(props.load ? props.load : () => {
    api.get('/' + props.model.toLowerCase())
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.load, props.model]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Table className={styles.ModelGrid}>
      <thead>
        <tr>
          { props.cols.map((col, i) => <td key={i}>{ col.title }</td>) }
        </tr>
      </thead>
      <tbody>
        { data.map((row, i) => (
          <tr key={i}>
          { props.cols.map((col, j) => <td key={j}>{ row[col.field] }</td>) }
          </tr>
        )) }
      </tbody>
    </Table>
  );
}

export default ModelGrid;