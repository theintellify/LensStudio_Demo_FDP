
//@input SceneObject environmentContainer
/** @type {SceneObject} */
var environmentContainer = script.environmentContainer;
//@input SceneObject environmentNameContainer
/** @type {SceneObject} */
var environmentNameContainer = script.environmentNameContainer;

/** @type {SceneObject[]} */
var environments;
/** @type {SceneObject[]} */
var environmentNames;

Setup();

var envLength = environments.length;
var envIndex = 0;

environments[envIndex].enabled = true;
environmentNames[envIndex].enabled = true;

var tapEvent = script.createEvent("TapEvent");
tapEvent.bind(function (eventData)
{
    environments[envIndex].enabled = false;
    environmentNames[envIndex].enabled = false;

    var tapXpos = (eventData.getTapPosition().x - 0.5) * 2;

    if (tapXpos < 0)
    {
        envIndex -= 1;
        // print("previous");
    }
    else if (tapXpos > 0)
    {
        envIndex += 1;
        // print("Next");
    }
    
    envIndex = Wrap(envIndex, 0, envLength - 1);

    environments[envIndex].enabled = true;
    environmentNames[envIndex].enabled = true;
});

function Setup()
{
    environments = environmentContainer.children;
    environmentNames = environmentNameContainer.children;
}

function Wrap(value, min, max)
{
    var offset = max - min + 1;

    if (value < min)
    {
        value += offset;
    }
    else if (value > max)
    {
        value -= offset;
    }

    return value;
}