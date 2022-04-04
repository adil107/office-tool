import Login from "pages/auth/login";
import SignUp from "pages/auth/sign-up";
import HomePage from "pages/home";
import MyClient from "pages/client/my-clients";
import IssueInvoice from "pages/finance/issue-invoice";
import ReceiveInvoice from "pages/finance/receive-invoice";
import Proforma from "pages/finance/proforma";
import DocTemplate from "pages/document/doc-template";
import LegalHelp from "pages/legal-help";
import FinancialHelp from "pages/financial-help";
import Account from "pages/account";
import NewDocumentPage from "pages/document/new-document";
import Notification from "pages/notification";
import ClientOverview from "pages/client/client-overview";
import SingleIssueInvoice from "pages/finance/issue-invoice/single-issue-invoice";
import NewIssueInvoice from "pages/finance/issue-invoice/new-issue-invoice";

export const publicRoute = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <SignUp />,
  },
];

export const privateRoute = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/my-client",
    component: <MyClient />,
  },
  {
    path: "/client-overview/:id",
    component: <ClientOverview />,
  },
  {
    path: "/finance-issue-invoice",
    component: <IssueInvoice />,
  },
  {
    path: "/finance/issue-invoice/:id",
    component: <SingleIssueInvoice />,
  },
  {
    path: "/finance/issue-invoice/:id/new-invoice",
    component: <NewIssueInvoice />,
  },
  {
    path: "/finance-receive-invoice",
    component: <ReceiveInvoice />,
  },
  {
    path: "/finance-proforma",
    component: <Proforma />,
  },
  {
    path: "/documents",
    component: <DocTemplate />,
  },
  {
    path: "/new-documents",
    component: <NewDocumentPage />,
  },
  {
    path: "/legal-help",
    component: <LegalHelp />,
  },
  {
    path: "/financial-help",
    component: <FinancialHelp />,
  },
  {
    path: "/account",
    component: <Account />,
  },
  {
    path: "/notification",
    component: <Notification />,
  },
];
