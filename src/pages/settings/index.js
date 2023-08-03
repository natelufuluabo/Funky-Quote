import Layout from "../../../components/layout";
import BackgroundPicker from "../../../components/backgroundPicker";

const Settings = () => {
    return (
        <Layout suppressHydrationWarning={true}>
            <BackgroundPicker suppressHydrationWarning={true}/>
        </Layout>
    )
};

export default Settings;