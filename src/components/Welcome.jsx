import StoryScene from "./StoryScene";

export default function Welcome({ onFinish }) {

  return (

    <StoryScene

      cards={[
        "Hi, babi.",
        "Happy\nNational Girlfriend's Day.",
        "I've made\nsomething\njust for you.",
        "I hope\nthis makes you smile.",
        "Can I give you\nsomething?"
      ]}

      onFinish={onFinish}

    />

  );

}