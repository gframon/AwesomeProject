import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      ref={(a) => (this.scroll = a)}
      style={styles.storyContainer}
      contentContainerStyle={styles.storyInnerContainer}
      stickyHeaderIndices={[0, 1]}
      indicatorStyle="white"
      pagingEnabled={true}
      scrollsToTop={true}
      bounces={true}>
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => this.scroll.scrollToEnd({animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>
        <Text style={styles.sectionDescriptionStory}>
          This is going to be a lengthy story on how this conference started
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          To be concrete, descriptive writing has to offer specifics the reader
          can envision. Rather than “Her eyes were the color of blue rocks”
          (Light blue? Dark blue? Marble? Slate?), try instead, “Her eyes
          sparkled like sapphires in the dark.” To be evocative, descriptive
          writing has to unite the concrete image with phrasing that evokes the
          impression the writer wants the reader to have. Consider “her eyes
          shone like sapphires, warming my night” versus “the woman’s eyes had a
          light like sapphires, bright and hard.” Each phrase uses the same
          concrete image, then employs evocative language to create different
          impressions. To be plausible, the descriptive writer has to constrain
          the concrete, evocative image to suit the reader’s knowledge and
          attention span. “Her eyes were brighter than the sapphires in the
          armrests of the Tipu Sultan’s golden throne, yet sharper than the
          tulwars of his cruelest executioners” will have the reader checking
          their phone halfway through. “Her eyes were sapphires, bright and
          hard” creates the same effect in a fraction of the reading time. As
          always in the craft of writing: when in doubt, write less.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
          To be evocative, descriptive writing has to unite the concrete image
          with phrasing that evokes the impression the writer wants the reader
          to have. Consider “her eyes shone like sapphires, warming my night”
          versus “the woman’s eyes had a light like sapphires, bright and hard.”
          Each phrase uses the same concrete image, then employs evocative
          language to create different impressions.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
          To be plausible, the descriptive writer has to constrain the concrete,
          evocative image to suit the reader’s knowledge and attention span.
          “Her eyes were brighter than the sapphires in the armrests of the Tipu
          Sultan’s golden throne, yet sharper than the tulwars of his cruelest
          executioners” will have the reader checking their phone halfway
          through. “Her eyes were sapphires, bright and hard” creates the same
          effect in a fraction of the reading time. As always in the craft of
          writing: when in doubt, write less.
        </Text>
        <Text style={styles.sectionDescriptionStory}>End of the Story.</Text>
        <Pressable
          onPress={() => this.scroll.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go to Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
