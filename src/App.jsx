import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/about/Profile";
import Membership from "./components/about/Membership";
import Governance from "./components/about/Governance";
import ResourceCenter from "./components/resources/ResourceCenter";
import Symposium from "./components/symposium/Symposium";
import GetInvolved from "./components/get-involved/GetInvolved";
import OurWork from "./components/work/OurWork";
import Gallery from "./components/gallery/Gallery";
import AdminLayout from "./components/admin/AdminLayout";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import AuthGuard from "./components/auth/AuthGuard";
import routes from "tempo-routes";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/about/membership" element={<Membership />} />
          <Route path="/about/governance" element={<Governance />} />
          <Route path="/resources" element={<ResourceCenter />} />
          <Route path="/symposium" element={<Symposium />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/admin"
            element={
              <AuthGuard>
                <AdminLayout />
              </AuthGuard>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Layout>
    </Suspense>
  );
}

export default App;
