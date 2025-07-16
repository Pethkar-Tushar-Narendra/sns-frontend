import { useEffect, useState } from 'react';
import API from '../api/axios';
import ReportTable from '../components/ReportTable';
import Navbar from '../components/Navbar';

export default function Reports() {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      const res = await API.get('/admin/reports');
      setReports(res.data);
    } catch (err) {
      console.error('Failed to fetch reports:', err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (<Navbar Component={
    <div className="py-6">
      <ReportTable reports={reports} onUpdate={fetchReports} />
    </div>}/>
  );
}
