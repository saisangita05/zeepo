import React, { useState } from "react";
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
    const [activeSection, setActiveSection] = useState("dashboard");

    return (
        <div>
            <Navbar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "24px", padding: "24px" }}>
                {/* Sidebar Navigation */}
                <div style={{ ...cardStyle, paddingBottom: "28px" }}>
                    <h2 style={sectionTitle}>Zeepo Dashboard</h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={listItemStyle} onClick={() => setActiveSection("profile")}>
                            <User size={20} /> Profile
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("services")}>
                            <Briefcase size={20} /> Services
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("learning")}>
                            <BookOpen size={20} /> Learning
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("messages")}>
                            <MessageCircle size={20} /> Messages
                        </li>
                        <li style={listItemStyle} onClick={() => setActiveSection("notifications")}>
                            <Bell size={20} /> Notifications
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                    {/* Always Show Welcome Section */}
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

                    {/* Conditional Right Side View */}
                    {activeSection === "profile" ? (
    <div style={{ ...cardStyle, gridColumn: "span 2", display: "flex", alignItems: "center", gap: "24px" }}>
        {/* Profile Picture */}
        <div style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #4f46e5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            flexShrink: 0
        }}>
            <img
                src="https://i.pravatar.cc/150?img=32" // You can replace with user's actual image URL
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>

        {/* Profile Details */}
        <div>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", color: "#333" }}>
                Sai Sangita Adhek
            </h3>
            <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                <strong>Role:</strong> Student
            </p>
            <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                <strong>Email:</strong> saisangita@example.com
            </p>
            <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>
                <strong>Skills:</strong> Web Dev, UI/UX, Flutter, GenAI
            </p>
        </div>
    </div>
) : (

                        <>
                            {/* Default Dashboard Cards */}
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
