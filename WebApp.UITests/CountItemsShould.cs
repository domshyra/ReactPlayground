using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace WebApp.UITests
{
    /// <summary>
    /// Used to test checboxItems
    /// </summary>
    /// <remarks>Make sure the front end webpack server is running</remarks>
    public class CountItemsShould
    {
        private const string _appTitle = "React App";
        private const string _appUrl = "http://localhost:3000/";

        [Fact]
        [Trait("Category", "Smoke")]
        public void LoadApplicationPage()
        {
            //Act
            using IWebDriver chromeDriver = new ChromeDriver();

            //Arrange
            chromeDriver.Navigate().GoToUrl(_appUrl);

            //Assert
            Assert.Equal(_appTitle, chromeDriver.Title);
            Assert.Equal(_appUrl, chromeDriver.Url);
        }

        //TODO: test by data-testid=Add

        [Theory]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(10)]
        [Trait("Category", "Smoke")]
        public void AddWhenAddButtonIsPressed(int n)
        {
            //Act
            using IWebDriver chromeDriver = new ChromeDriver();

            string expectedText = $"Redux count is {n}";

            //Arrange
            chromeDriver.Navigate().GoToUrl(_appUrl);
            IWebElement addButton = chromeDriver.FindElement(By.Id("count-up-btn"));
            IWebElement countText = chromeDriver.FindElement(By.Id("count-text"));
            for (int i = 0; i < n; i++)
            {
                addButton.Click();
            }

            //Assert
            Assert.Equal(expectedText, countText.Text);
        }
        
        [Theory]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(10)]
        [Trait("Category", "Smoke")]
        public void MinusWhenMinusButtonIsPressed(int n)
        {
            //Act
            using IWebDriver chromeDriver = new ChromeDriver();

            string expectedText = $"Redux count is -{n}";

            //Arrange
            chromeDriver.Navigate().GoToUrl(_appUrl);
            IWebElement minusButton = chromeDriver.FindElement(By.Id("count-down-btn"));
            IWebElement countText = chromeDriver.FindElement(By.Id("count-text"));
            for (int i = 0; i < n; i++)
            {
                minusButton.Click();
            }

            //Assert
            Assert.Equal(expectedText, countText.Text);
        }


        [Fact]
        [Trait("Category", "Smoke")]
        public void RemainZeroWhenBothButtonsPressed()
        {
            //Act
            using IWebDriver chromeDriver = new ChromeDriver();

            string expectedText = "Redux count is 0";

            //Arrange
            chromeDriver.Navigate().GoToUrl(_appUrl);
            IWebElement addButton = chromeDriver.FindElement(By.Id("count-up-btn"));
            IWebElement minusButton = chromeDriver.FindElement(By.Id("count-down-btn"));
            IWebElement countText = chromeDriver.FindElement(By.Id("count-text"));
            addButton.Click();
            minusButton.Click();

            //Assert
            Assert.Equal(expectedText, countText.Text);
        }
    }
}

