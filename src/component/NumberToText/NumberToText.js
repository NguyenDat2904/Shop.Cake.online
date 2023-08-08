function convertNumberToText(number) {
    var units = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ', 'tỷ tỷ'];
    var words = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

    if (number === 0) {
        return 'không';
    }

    var numberText = '';
    var unitIndex = 0;

    while (number > 0) {
        var threeDigits = number % 1000;
        number = Math.floor(number / 1000);
        var digitText = '';

        if (threeDigits > 0) {
            if (threeDigits >= 100) {
                digitText += words[Math.floor(threeDigits / 100)] + ' trăm ';
                threeDigits %= 100;
            }

            if (threeDigits >= 10) {
                if (threeDigits >= 20) {
                    digitText += words[Math.floor(threeDigits / 10)] + ' mươi ';
                    threeDigits %= 10;
                } else if (threeDigits >= 16) {
                    digitText += 'mười ' + words[threeDigits % 10] + ' ';
                    threeDigits = 0;
                } else {
                    digitText += 'mười ';
                    threeDigits %= 10;
                }
            }

            if (threeDigits > 0) {
                digitText += words[threeDigits] + ' ';
            }

            numberText = digitText + units[unitIndex] + ' ' + numberText;
        }

        unitIndex++;
    }

    return numberText.trim();
}

export const convertNumberToShortText = (number) => {
    if (number >= 1000000000000) {
        return (number / 1000000000000).toFixed(1) + ' tỷ';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + ' triệu';
    } else {
        return convertNumberToText(number);
    }
};
