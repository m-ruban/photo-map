<script lang="ts">
    import Column from 'src/core-components/Column/Column.svelte';
    import Title from 'src/core-components/Title/Title.svelte';
    import Label from 'src/core-components/Label/Label.svelte';
    import Email from 'src/core-components/Icon/Email.svelte';
    import Login from 'src/core-components/Icon/Login.svelte';
    import Password from 'src/core-components/Icon/Password.svelte';
    import VSpace from 'src/core-components/VSpace/VSpace.svelte';
    import Input from 'src/core-components/Input/Input.svelte';
    import Text from 'src/core-components/Text/Text.svelte';
    import Link from 'src/core-components/Link/Link.svelte';
    import Button from 'src/core-components/Button/Button.svelte';

    let email = $state('');
    let password = $state('');

    function sendRequest() {
		console.log('sendRequest');
	}
</script>

<style lang="less">
    @import "src/pages-components/LoginForm/login-form.less";
</style>

<Column size="4" layout="center">
    <div class="login-form">
        <div class="logo-large"></div>
        <Title typography="semibold" size="large">Photo Points</Title>
        <VSpace height="25" />
        <div class="login-form-body">
            <Label title="Адрес электронной почты" icon={Email} />
            <VSpace height="20" />
            <Input type="text" bind:value={email} placeholder="Введите адрес электронной почты" />
            <VSpace height="30" />
            <Label title="Пароль" icon={Password} />
            <VSpace height="20" />
            <Input type="password" bind:value={password} placeholder="Введите пароль учетной записи" />
            <VSpace height="30" />
            <div class="login-form-footer">
                <div>
                    <Text typography="regular" size="large">Нет учетной записи?</Text>
                    <Link href="/">Создайте ее!</Link>
                </div>
                <div class="login-form-action">
                    <Button onclick={sendRequest} icon={Login}>Войти</Button>
                </div>
            </div>
            <VSpace height="30" />
        </div>
    </div>
</Column>