import React from "react";
import { Bell, MessageCircle, User, Briefcase, BookOpen } from "lucide-react";
import Navbar from "./navbar";

const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    background: "#fff",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};

const sectionTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#333",
};

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    color: "#333",
    transition: "background 0.3s ease",
};

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "24px", padding: "24px" }}>
                {/* Sidebar Navigation */}
                <div style={{ ...cardStyle, paddingBottom: "28px" }}>
                    <h2 style={sectionTitle}>Zeepo Dashboard</h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={listItemStyle}><User size={20} /> Profile</li>
                        <li style={listItemStyle}><Briefcase size={20} /> Services</li>
                        <li style={listItemStyle}><BookOpen size={20} /> Learning</li>
                        <li style={listItemStyle}><MessageCircle size={20} /> Messages</li>
                        <li style={listItemStyle}><Bell size={20} /> Notifications</li>
                    </ul>
                </div>

                {/* Main Content */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                    {/* Welcome Section */}
                    <div
                        style={{
                            ...cardStyle,
                            gridColumn: "span 2",
                            background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                            color: "white",
                        }}
                    >
                        <h2 style={{ fontSize: "26px", fontWeight: "700" }}>Welcome to Zeepo!</h2>
                        <p style={{ marginTop: "10px", fontSize: "15px", fontWeight: "400" }}>
                            Connect. Learn. Grow. Empower yourself and others.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div style={cardStyle}>
                        <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>Your Active Projects</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>2 ongoing, 1 completed</p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>Earnings Overview</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>₹5,200 earned this month</p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>Learning Progress</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>3 courses in progress</p>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>Suggested Gigs</h3>
                        <ul style={{ fontSize: "14px", color: "#1d4ed8", paddingLeft: "18px", marginTop: "6px" }}>
                            <li>Poster Design for Local Café</li>
                            <li>Social Media Graphics for NGO</li>
                            <li>Landing Page for a Startup</li>
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div style={{ ...cardStyle, gridColumn: "span 2", textAlign: "center" }}>
                        <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Want to earn more?</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>
                            Take a course and apply your skills immediately on real gigs.
                        </p>
                        <button
                            style={{
                                marginTop: "18px",
                                padding: "12px 28px",
                                background: "#4f46e5",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                cursor: "pointer",
                                fontWeight: "600",
                                fontSize: "14px",
                            }}
                        >
                            Explore Courses
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
