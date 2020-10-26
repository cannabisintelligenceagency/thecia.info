import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RichText } from 'prismic-reactjs'

const CIATabs = (props) => (
  <div className="tabs-container border-b" id={props.slice.slice_type}>
    <div className="container mx-auto">
      <div className="tabs-header-container">
        <img src="https://images.prismic.io/thecia/3dafb445-8cc7-4ca4-a5c9-4e6c2b00c321_rsz_cia-shield-final-color.png"  alt="Cannabis Intelligence Agency Inc." />
        <h2 className="tabs-header">{RichText.asText(props.slice.primary.title1)}</h2>
      </div>
      <Tabs>
        <TabList>
          {props.slice.items.map((item, i) => (
            <Tab key={i}>
              <h3 className="tab-title">
                {RichText.render(item.title1)}
              </h3>
            </Tab>
          ))}
        </TabList>
        {props.slice.items.map((item, i) => (
          <TabPanel key={i}>
            <div className="tab-body">
              {RichText.render(item.body1)}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  </div>
)

export default CIATabs