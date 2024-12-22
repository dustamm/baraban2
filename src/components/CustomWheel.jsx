import { SpinWheel } from 'spin-wheel-game';

// let segments = [
//   { segmentText: 'Option 1', segColor: 'red' },
//   { segmentText: 'Option 2', segColor: 'blue' },
//   { segmentText: 'Option 4', segColor: 'green' },
//   { segmentText: 'Option 5', segColor: 'red' },
//   { segmentText: 'Option 6', segColor: 'blue' },
//   { segmentText: 'Option 7', segColor: 'green' },
//   { segmentText: 'Option 8', segColor: 'red' },
//   { segmentText: 'Option 9', segColor: 'blue' },
//   { segmentText: 'Option 10', segColor: 'green' },
//   { segmentText: 'Option 11', segColor: 'red' },
//   { segmentText: 'Option 12', segColor: 'blue' },
//   { segmentText: 'Option 13', segColor: 'green' },
//   { segmentText: 'Option 14', segColor: 'red' },
//   { segmentText: 'Option 15', segColor: 'blue' },
//   { segmentText: 'Option 16', segColor: 'green' },
//   { segmentText: 'Option 17', segColor: 'green' },
//   // Add more segments as needed
// ];

export default function MySpinWheel({setQuestion, onSpin, segments})  {
    const handleSpinFinish = (result) => {
        setQuestion(result)
        segments = segments.filter(item => item.segmentText !== result)
        onSpin()
    };
  
    const spinWheelProps = {
      segments,
      onFinished: handleSpinFinish,
      primaryColor: 'black',
      contrastColor: 'white',
      buttonText: 'Spin',
      isOnlyOnce: false,
      size: 290,
      upDuration: 100,
      downDuration: 600,
      fontFamily: 'Arial',
      arrowLocation: 'top',
      showTextOnSpin: false,
      isSpinSound: true,
    };
  
    return <SpinWheel {...spinWheelProps} />
  }