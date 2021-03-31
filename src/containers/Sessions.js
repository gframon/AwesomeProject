import React from 'react';
import {Text, View, SectionList, Image} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from '../containers/styles/sharedStyles';

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index}
        stickySectionHeadersEnabled={true}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        ItemSeparatorComponent={SeparatorComponet}
      />
    </View>
  );
}

const renderSectionHeader = ({section}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SessionsList
        id={index}
        name={item.title}
        desc={item.description}
        speaker={item.speakers[0].name}
      />
    </View>
  );
};

const SessionsList = ({id, name, speaker, desc}) => {
  return (
    <View key={id} style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{`Session : ${name}`}</Text>
      <Text style={styles.sectionDescription}>{`Details : ${desc}`}</Text>
      <Text style={styles.sectionDescription}>{`Speaker : ${speaker} `}</Text>
    </View>
  );
};

const SeparatorComponet = () => {
  return <View style={styles.separatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.headerImage}
        source={require('../images/sec2.jpg')}
      />
      <Text style={styles.sectionDescription}>Awesome Sessions Lineup!!</Text>
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        {' '}
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};

export default Sessions;
