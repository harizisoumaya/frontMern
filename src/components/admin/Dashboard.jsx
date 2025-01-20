import { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log(user);
        if (user) {
            const parsedUser = JSON.parse(user);
            setName(parsedUser.name || 'Admin');
            setAvatar(parsedUser.avatar || '/default-avatar.png'); // Fallback avatar
        }
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="admin-info">
                    <span className="admin-name">Admin: {name}</span>
                    <img
                        src={avatar}
                        alt="Admin Avatar"
                        className="admin-avatar"
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="dashboard-title">Dashboard</h1>
            </div>
            <div className="dashboard-main">
                <p>Welcome to the dashboard. Here is the main content.</p>
            </div>
        </div>
    );
}

export default Dashboard;
