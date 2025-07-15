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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reported Content</h1>
      <ReportTable reports={reports} onUpdate={fetchReports} />
    </div>}/>
  );
}
