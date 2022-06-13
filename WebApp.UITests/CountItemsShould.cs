using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using WebApp.UITests.DriverFixtures;
using WebApp.UITests.PageObjectModels;
using Xunit;

namespace WebApp.UITests
{
    /// <summary>
    /// Used to test checboxItems
    /// </summary>
    /// <remarks>Make sure the front end webpack server is running</remarks>
    public class CountItemsShould : IClassFixture<FireFoxDriverFixture>
    {
        private const string _appTitle = "React App";
        private const string _appUrl = "http://localhost:3000/";
        private readonly IWebDriver _driver;

        //public CountItemsShould(IWebDriver webDriver)
        //{
        //    _driver = webDriver;
        //    _driver.Manage().Cookies.DeleteAllCookies();
        //    _driver.Navigate().GoToUrl("about:blank");
        //}

        //public CountItemsShould(ChromeDriverFixture chromeDriverFixture)
        //{
        //    _driver = chromeDriverFixture.Driver;
        //    _driver.Manage().Cookies.DeleteAllCookies();
        //    _driver.Navigate().GoToUrl("about:blank");
        //}
        public CountItemsShould(FireFoxDriverFixture fireFoxDriverFixture)
        {
            _driver = fireFoxDriverFixture.Driver;
            _driver.Manage().Cookies.DeleteAllCookies();
            _driver.Navigate().GoToUrl("about:blank");
        }

        [Fact]
        [Trait("Category", "Smoke")]
        public void LoadApplicationPage()
        {
            //Act

            //Arrange
            _driver.Navigate().GoToUrl(_appUrl);

            //Assert
            Assert.Equal(_appTitle, _driver.Title);
            Assert.Equal(_appUrl, _driver.Url);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(10)]
        [Trait("Category", "Smoke")]
        public void AddWhenAddButtonIsPressed(int n)
        {
            //Act
            string expectedText = $"Redux count is {n}";
            HomePage? homepage = new(_driver);
            homepage.NavigateTo();

            //Arrange
            homepage.ClickAddButton(n);

            //Assert
            Assert.Equal(expectedText, homepage.CountText.Text);
        }
        
        [Theory]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(10)]
        [Trait("Category", "Smoke")]
        public void MinusWhenMinusButtonIsPressed(int n)
        {
            //Act
            string expectedText = $"Redux count is -{n}";
            HomePage? homepage = new(_driver);
            homepage.NavigateTo();

            //Arrange
            homepage.ClickMinusButton(n);
            

            //Assert
            Assert.Equal(expectedText, homepage.CountText.Text);
        }


        [Fact]
        [Trait("Category", "Smoke")]
        public void RemainZeroWhenBothButtonsPressed()
        {
            //Act
            string expectedText = "Redux count is 0";
            HomePage? homepage = new(_driver);
            homepage.NavigateTo();

            //Arrange
            homepage.ClickAddButton(1);
            homepage.ClickMinusButton(1);

            //Assert
            Assert.Equal(expectedText, homepage.CountText.Text);
        }
    }
}

